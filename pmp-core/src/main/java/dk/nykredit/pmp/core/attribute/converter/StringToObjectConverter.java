package dk.nykredit.pmp.core.attribute.converter;


import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class StringToObjectConverter implements AttributeConverter<Object, String> {

    @Override
    public String convertToDatabaseColumn(Object attribute) {

        return attribute.toString();
    }

    @Override
    public Object convertToEntityAttribute(String dbData) {
        return dbData;
    }
}
