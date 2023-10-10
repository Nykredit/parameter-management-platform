package dk.nykredit.pmp.component.tests.persistence;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;

import dk.nykredit.nic.persistence.vendor.liquibase.DatabaseChangelog;
import dk.nykredit.pmp.core.service.ParameterService;

/**
 * Initializing the database making sure the structure fits the expected structure.
 */
@Startup
@Singleton
@TransactionManagement(TransactionManagementType.BEAN)
public class DatabaseInitializer {

    @Inject
    ParameterService service;

    private static final String CHANGELOG = "liquibase/changelog.yml";
    private static final String DATASOURCE_NAME = "pmp-component-tests";

    @PostConstruct
    public void bootstrap() {
        new DatabaseChangelog(CHANGELOG).runChangelog(DATASOURCE_NAME);


        service.persistParameter("rate", 10.5);
        service.persistParameter("person", "John Doe");
    }

}
