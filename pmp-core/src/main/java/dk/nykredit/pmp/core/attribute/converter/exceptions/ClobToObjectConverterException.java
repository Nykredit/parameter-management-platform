package dk.nykredit.pmp.core.attribute.converter.exceptions;


public class ClobToObjectConverterException extends RuntimeException {

    public ClobToObjectConverterException(String message, Exception e) {
        super(message, e);
    }

}
