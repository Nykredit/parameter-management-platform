package dk.nykredit.pmp.core.commit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.jboss.weld.environment.se.Weld;
import org.jboss.weld.environment.se.WeldContainer;
import org.junit.jupiter.api.AfterEach;

import dk.nykredit.pmp.core.remote.json.ObjectMapperFactory;
import dk.nykredit.pmp.core.service.ParameterService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@TestInstance(Lifecycle.PER_CLASS)
public class TestChangeDeserializer {

    ObjectMapper mapper;
    private WeldContainer container;
    private CommitDirector commitDirector;

    @BeforeEach
    public void setupMapper() {
        Weld weld = new Weld();
        container = weld.initialize();
        commitDirector = container.select(CommitDirector.class).get();
        ParameterService parameterService = commitDirector.getParameterService();
        parameterService.persistParameter("test1", "data1");
        parameterService.persistParameter("test2", 5);

        mapper = container.select(ObjectMapperFactory.class).get().getObjectMapper();
    }

    @AfterEach
    public void after() {
        container.shutdown();
    }

    @Test
    public void testDeserializeRawParameterChange() throws Exception {
        RawParameterChange expectedChange = new RawParameterChange();
        expectedChange.setName("test");
        expectedChange.setNewValue("0");
        expectedChange.setOldValue("1");
        expectedChange.setType("integer");
        expectedChange.setId("id");
        expectedChange.setService(new Service("testServiceName","testServiceAddress", "testServiceEnvironment"));

        String json = mapper.writeValueAsString(expectedChange);
        RawChange change = mapper.readValue(json, RawParameterChange.class);

        assertEquals(expectedChange, change);
    }

    @Test
    public void testDeserializeRawParameterRevert() throws JsonProcessingException {

        RawParameterRevert expectedRevert = new RawParameterRevert();
        expectedRevert.setParameterName("test1");
        expectedRevert.setCommitHash("10");
        expectedRevert.setRevertType("parameter");
        expectedRevert.setService(new Service("testServiceName","testServiceAddress", "testServiceEnvironment"));



        String json = "{\"parameterName\":\"test1\",\"commitHash\":\"10\",\"revertType\":\"parameter\",\"service\":{\"name\":\"testServiceName\",\"address\":\"testServiceAddress\",\"environment\":\"testServiceEnvironment\"}}";
        RawParameterRevert revert = mapper.readValue(json, RawParameterRevert.class);

        assertEquals(expectedRevert, revert);
    }

    @Test
    public void testDeserializeRawCommitRevert() throws JsonProcessingException {
        
        String json = "{\"commitHash\":\"10\"}";


        RawCommitRevert expectedRevert = new RawCommitRevert();
        expectedRevert.setCommitHash("10");

        RawCommitRevert revert = mapper.readValue(json, RawCommitRevert.class);

        assertEquals(expectedRevert, revert);
    }
}
