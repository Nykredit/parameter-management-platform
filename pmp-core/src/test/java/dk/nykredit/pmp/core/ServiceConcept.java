package dk.nykredit.pmp.core;


import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

import javax.inject.Inject;

import dk.nykredit.pmp.core.repository.exception.TypeCastingFailedException;
import dk.nykredit.pmp.core.service.ParameterService;
import org.junit.jupiter.api.Assertions;

public class ServiceConcept {

    @Inject
    private ParameterService service;

    private final Integer integerValue = 42;
    private final Double doubleValue = 45.4d;
    private final Boolean boolValue = true;
    private final LocalDate localDateValue = LocalDate.now();
    private final LocalDateTime localDateTimeValue = LocalDateTime.now();
    private final String stringValue = "String_value";
    private final char charValue = 'C';

    public void run() {
        // Persist parameters
        service.persistParameter("parameter_1", integerValue);
        service.persistParameter("parameter_3", doubleValue);
        service.persistParameter("parameter_2", boolValue);
        service.persistParameter("parameter_4", localDateValue);
        service.persistParameter("parameter_5", localDateTimeValue);
        service.persistParameter("parameter_6", stringValue);
        service.persistParameter("parameter_7", charValue);

        // Retrieve parameters
        int parameter_1 = service.findParameterByName("parameter_1");
        boolean parameter_2 = service.findParameterByName("parameter_2");
        Double parameter_3 = service.findParameterByName("parameter_3");
        LocalDate parameter_4 = service.findParameterByName("parameter_4");
        LocalDateTime parameter_5 = service.findParameterByName("parameter_5");
        String parameter_6 = service.findParameterByName("parameter_6");
        char parameter_7 = service.findParameterByName("parameter_7");

        // Test initial value against retrieved value
        assertEquals(integerValue, parameter_1);
        assertEquals(doubleValue, parameter_3);
        assertEquals(boolValue, parameter_2);
        assertEquals(localDateValue, parameter_4);
        assertEquals(localDateTimeValue, parameter_5);
        assertEquals(stringValue, parameter_6);
        assertEquals(charValue, parameter_7);
    }

    public void runError() {
        // Persist parameters
        service.persistParameter("parameter_1", new ArrayList<>());

        TypeCastingFailedException thrown = Assertions.assertThrows(TypeCastingFailedException.class, () -> {
            int parameter_1 = service.findParameterByName("parameter_1");
        });

        Assertions.assertEquals("Failed to cast parameter [Name: parameter_1, Type: ArrayList, Value: []]", thrown.getMessage());
    }

}
