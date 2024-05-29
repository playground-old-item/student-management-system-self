package com.studentMS.Studentappnew.dto.paginated;

import com.studentMS.Studentappnew.dto.responcedto;
import lombok.*;

import java.util.List;
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class paginatedStudentDto {
    private long count;
    private List<responcedto> dataList;
}
