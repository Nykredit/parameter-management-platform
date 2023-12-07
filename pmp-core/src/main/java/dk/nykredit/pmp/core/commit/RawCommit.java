package dk.nykredit.pmp.core.commit;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RawCommit {
    private LocalDateTime pushDate;
    private String user;
    private String message;
    private List<String> affectedServices;

    private List<RawChange> changes;

    
}
