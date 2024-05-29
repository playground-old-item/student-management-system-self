package com.studentMS.Studentappnew.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class requestDto {
    private String firstName;

    private String lastName;

    private String email;
}
