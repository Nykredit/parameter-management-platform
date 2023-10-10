package dk.nykredit.pmp.core.persistence;


import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import dk.nykredit.pmp.core.attribute.converter.StringToObjectConverter;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "PARAMETER_MANAGEMENT")
@Getter
@Setter
public class ParameterEntity {
    @Id
    @Column(name = "ID", length = 36)
    private String id;

    @Column(name = "NAME", unique = true)
    private String name;

    @Column(name = "TYPE")
    private String type;


    @Column(name = "PVALUE", length = 4000)
    @Convert(converter = StringToObjectConverter.class)
    private Object pValue;

    @PrePersist
    public void generatedId() {
        this.id = UUID.randomUUID().toString();
    }
}
