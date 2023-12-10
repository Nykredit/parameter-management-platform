package dk.nykredit.pmp.core.util;

public class ChangeValidatorFactoryImpl implements ChangeValidatorFactory {

    @Override
    public ChangeValidator createChangeValidator() {
        return new ChangeValidatorImpl();
    }

}
