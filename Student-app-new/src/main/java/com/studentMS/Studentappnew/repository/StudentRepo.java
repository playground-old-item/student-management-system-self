package com.studentMS.Studentappnew.repository;

import com.studentMS.Studentappnew.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student,String> {
}
