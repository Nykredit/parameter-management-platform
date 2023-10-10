package dk.nykredit.pmp.component.tests.api;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;

import com.fasterxml.jackson.jaxrs.json.JacksonJaxbJsonProvider;
import dk.nykredit.nic.core.diagnostic.ContextInfo;
import dk.nykredit.nic.core.diagnostic.DiagnosticContext;
import io.restassured.RestAssured;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PmpResourceIT {

    private static final String APPLICATION_URL = "http://localhost:7001/pmp-component-tests";
    private static final String OAUTH_URL = "http://localhost:7001/security";

    private DiagnosticContext dCtx;

    @BeforeEach
    public void setupLogToken() {
        dCtx = new DiagnosticContext(new ContextInfo() {
            @Override
            public String getLogToken() {
                return "junit-" + System.currentTimeMillis();
            }

            @Override
            public void setLogToken(String s) {

            }
        });
        dCtx.start();
    }

    @AfterEach
    public void removeLogToken() {
        dCtx.stop();
    }

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = 7001;
        RestAssured.basePath = "pmp-component-tests";
    }

    @Test
    void testGetAccount() {
        given()
            .header("X-SAC-Roles", "INTERNAL-FULL-ACCESS")
            .header("X-Log-Token", DiagnosticContext.getLogToken())
            .header("Authorization", "Bearer " + requestAccessToken("test1"))
            .accept("text/plain")
            .when()
            .get(PmpResource.PATH)
            .then()
            .statusCode(200)
            .body(is("John Doe"));
    }

    @Test
    void ping() {
        given()
            .header("Authorization", "Bearer " + requestAccessToken("test1"))
            .accept("text/plain")
            .when()
            .get("ping")
            .then()
            .statusCode(200);
    }

    private String requestAccessToken(final String username) {
        WebTarget oauth2Service = ClientBuilder.newClient().register(JacksonJaxbJsonProvider.class)
            .target(OAUTH_URL);
        MultivaluedMap<String, String> request = new MultivaluedHashMap<>();
        request.putSingle("grant_type", "client_credentials");
        String credentials = Base64.getEncoder().encodeToString((username + ":passw0rd").getBytes(StandardCharsets.UTF_8));
        Map<String, String> oauthResponse = oauth2Service.path("oauth2/token")
            .request(MediaType.APPLICATION_FORM_URLENCODED_TYPE)
            .header("Authorization", "Basic " + credentials)
            .header("X-Log-Token", DiagnosticContext.getLogToken())
            .post(Entity.form(request), Map.class);
        return oauthResponse.get("access_token");
    }
}
