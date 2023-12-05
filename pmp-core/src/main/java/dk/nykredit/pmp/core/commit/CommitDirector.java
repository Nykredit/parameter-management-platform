package dk.nykredit.pmp.core.commit;

import dk.nykredit.pmp.core.audit_log.AuditLog;
import dk.nykredit.pmp.core.commit.exception.CommitException;
import dk.nykredit.pmp.core.service.ParameterService;
import lombok.Getter;

import javax.inject.Inject;
import javax.persistence.EntityManager;

@Getter
public class CommitDirector {
	@Inject
	private ParameterService parameterService;

	@Inject
	private AuditLog auditLog;

	@Inject
	private EntityManager entityManager;

	public void apply(Commit commit) throws CommitException {
		// If applying the commit fails, a `CommitException` will be thrown,
		// and `logCommit` will not be called
		commit.apply(this);
		auditLog.logCommit(commit);
	}

}