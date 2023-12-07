package dk.nykredit.pmp.core.util;

import java.io.InputStream;

import com.fasterxml.jackson.databind.ObjectMapper;

import dk.nykredit.pmp.core.remote.json.ObjectMapperFactory;
import dk.nykredit.pmp.core.remote.json.ObjectMapperFactoryImpl;
public class ServiceInfoProviderImpl implements ServiceInfoProvider {
    
    private static ServiceInfo serviceInfo;
    private final String SERVICE_INFO_FILE = "service-info.json";

    // TODO: Return to this when we can avoid creating a new ObjectMapperImpl
    ObjectMapperFactory objectMapperFactory = new ObjectMapperFactoryImpl();
    
    @Override
    public ServiceInfo getServiceInfo() {
        if (serviceInfo == null) {
            serviceInfo = readServiceFile();
        }
        return serviceInfo;
    }

    private ServiceInfo readServiceFile() {

        ObjectMapper mapper = objectMapperFactory.getObjectMapper();

        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        InputStream inputStream = classLoader.getResourceAsStream(SERVICE_INFO_FILE);

        try {
            
            ServiceInfo serviceInfo = mapper.readValue(inputStream, ServiceInfo.class);
            return serviceInfo;
        } catch (Exception e) {
            throw new Error(e);
        }
        
    }
}
