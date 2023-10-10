package dk.nykredit.pmp.component.tests;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import dk.nykredit.nic.rs.JaxRsRuntime;
import dk.nykredit.nic.rs.filter.FilterConfiguration;
import dk.nykredit.pmp.component.tests.api.PmpResource;


@ApplicationPath("/")
public class ServicesApplication extends Application {

    @Inject
    private FilterConfiguration filterConfiguration;

    @PostConstruct
    public void setup() {
        filterConfiguration.excludeUri(".*/ping");
        filterConfiguration.excludeUri(".*/health");
    }


    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<>();

        classes.addAll(Arrays.asList(
            PmpResource.class)
        );

        JaxRsRuntime.configure(classes);

        return classes;
    }
}