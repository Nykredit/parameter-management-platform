package dk.nykredit.pmp.core.database.setup;

import java.lang.reflect.Method;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class H2StartupListenerSetup {
    private static final Logger LOGGER = LoggerFactory.getLogger(H2StartupListenerSetup.class);
    private static final String TCP_SERVER_PORT = "dk.nykredit.pmp.h2.tcpport";
    private static final String WEB_SERVER_PORT = "dk.nykredit.pmp.h2.webport";
    private static final String STARTUP = "dk.nykredit.pmp.h2.startservers";
    private static final String ORG_H2_TOOLS_SERVER = "org.h2.tools.Server";
    private Object h2TcpServer;
    private Object h2WebServer;
    private Method stopServer;

    public H2StartupListenerSetup() {
    }

    public void contextInitialized() {
        boolean startup = Boolean.parseBoolean(System.getProperty(STARTUP, "false"));
        if (!startup) {
            return;
        }

        Class<?> h2ServerClass;
        try {
            h2ServerClass = Thread.currentThread().getContextClassLoader().loadClass(ORG_H2_TOOLS_SERVER);
        } catch (ClassNotFoundException e) {
            LOGGER.error("Cannot load " + ORG_H2_TOOLS_SERVER + " class. Ensure H2 classes are in classpath!");
            return;
        }

        String tcpPort = System.getProperty(TCP_SERVER_PORT, "7010");
        try {
            String[] args = {"-tcp", "-tcpAllowOthers", "-ifNotExists", "-tcpPort", tcpPort};
            Method createTcpServer = h2ServerClass.getMethod("createTcpServer", String[].class);
            Method serverStart = h2ServerClass.getMethod("start");
            h2TcpServer = createTcpServer.invoke(null, new Object[]{args});
            serverStart.invoke(h2TcpServer);
            stopServer = h2ServerClass.getMethod("stop");
            LOGGER.info("Started H2 tcp server on port {}", tcpPort);
        } catch (Exception e) {
            e.printStackTrace();
            LOGGER.error("Failed to start H2 tcp server on port {}", tcpPort, e);
        }

        String webPort = System.getProperty(WEB_SERVER_PORT, "8082");
        try {
            String[] args = {"-webPort", webPort, "-webAllowOthers"};
            Method createWebServer = h2ServerClass.getMethod("createWebServer", String[].class);
            h2WebServer = createWebServer.invoke(null, new Object[]{args});
            Method serverStart = h2ServerClass.getMethod("start");
            serverStart.invoke(h2WebServer);
            LOGGER.info("Started H2 web server on port {}", webPort);
        } catch (Exception e) {
            LOGGER.error("Failed to start H2 web server on port {}", webPort, e);
        }
    }

    public void contextDestroyed() {
        if (h2TcpServer != null) {
            try {
                stopServer.invoke(h2TcpServer);
                LOGGER.info("Stopped H2 tcp server...");
            } catch (Exception e) {
                LOGGER.error("Failed to stop H2 tcp server!", e);
            }
        }
        if (h2WebServer != null) {
            try {
                stopServer.invoke(h2WebServer);
                LOGGER.info("Stopped H2 web server...");
            } catch (Exception e) {
                LOGGER.error("Failed to stop H2 web server!", e);
            }
        }
    }
}