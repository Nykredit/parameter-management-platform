package dk.nykredit.pmp.core.service;


import dk.nykredit.pmp.core.persistence.ParameterEntity;
import dk.nykredit.pmp.core.util.EntityParser;

public interface ParameterService {
    <T> T findParameterByName(String name);

    <P> ParameterEntity persistParameter(String name, P value);

    EntityParser getTypeParsers();
}
