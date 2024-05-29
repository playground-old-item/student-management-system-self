package com.studentMS.Studentappnew.service;

import com.studentMS.Studentappnew.dto.paginated.paginatedStudentDto;
import com.studentMS.Studentappnew.dto.requestDto;
import com.studentMS.Studentappnew.dto.responcedto;
import com.studentMS.Studentappnew.model.Student;

import java.util.List;

public interface StudentService {
    public String saveStudent(requestDto dto);
    public String updateStudent(String id, requestDto dto);
    public void deleteStudent(String id);
    public responcedto findStudent(String id);
   public paginatedStudentDto findAll(int size, int page);
   public List<Student> findAllStudent();
}
