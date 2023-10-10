package dk.nykredit.pmp.component.tests.persistence;

import javax.enterprise.inject.Produces;
import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


public class EntityManagerProducer {
    @PersistenceContext(unitName = "pmpPersistenceUnit")
    private EntityManager em;


    @Produces
    @Singleton
    public EntityManager produceAccountEntityManager() {
        return em;
    }

}
