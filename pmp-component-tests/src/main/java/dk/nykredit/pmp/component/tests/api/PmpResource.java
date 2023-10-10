package dk.nykredit.pmp.component.tests.api;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import dk.nykredit.nic.core.security.AccessRole;
import dk.nykredit.nic.rs.auth.AccessType;
import dk.nykredit.nic.rs.auth.SACRolesAllowed;
import dk.nykredit.pmp.core.service.ParameterService;
import io.swagger.annotations.Api;
import io.swagger.annotations.Authorization;

@Stateless

@Path(PmpResource.PATH)
@Api(value = PmpResource.PATH, authorizations = @Authorization("oauth2"))
@SACRolesAllowed(roles = {AccessRole.INTERNAL_FULL_ACCESS}, accessType = AccessType.INTERNAL)
public class PmpResource {
    static final String PATH = "/parameter";

    @Inject
    private ParameterService service;


    @GET
    @Produces({MediaType.TEXT_PLAIN})
    public Response parameter() {
        double rate = service.findParameterByName("rate");
        String person = service.findParameterByName("person");
        return Response.ok(person).build();
    }
}
