package dk.nykredit.pmp.core.repository;


import dk.nykredit.pmp.core.persistence.ParameterEntity;

public interface ParameterRepository {

    ParameterEntity getValueByName(String name);

    ParameterEntity persistParameterEntity(ParameterEntity entity);

    boolean checkIfParameterExists(String name);
}
