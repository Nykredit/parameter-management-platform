package dk.nykredit.pmp.core.repository.exception;


public class TypeCastingFailedException extends RuntimeException {

    public TypeCastingFailedException(String message, Exception e) {
        super(message, e);
    }

    public TypeCastingFailedException(String message) {
        super(message);
    }

}
