package com.studentMS.Studentappnew.controller;

import com.studentMS.Studentappnew.dto.paginated.paginatedStudentDto;
import com.studentMS.Studentappnew.dto.requestDto;

import com.studentMS.Studentappnew.dto.responcedto;
import com.studentMS.Studentappnew.model.Student;
import com.studentMS.Studentappnew.service.StudentService;
import com.studentMS.Studentappnew.util.statusResponceEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    // get all student
    @GetMapping(path="/findall",params = {"size","page"})
    public ResponseEntity<statusResponceEntity> getAllStudents(@RequestParam int size, @RequestParam int page){

        return new ResponseEntity<>(new statusResponceEntity(
                200,
                "Find all Student",
                studentService.findAll(size,page)
        ),HttpStatus.OK);

    }

    // save student
    @PostMapping("/save")
    public ResponseEntity<statusResponceEntity> SaveStudent(@RequestBody requestDto dto){

        return new ResponseEntity<>(new statusResponceEntity(
                201,
                "Student Saved",
                studentService.saveStudent(dto)
        ),HttpStatus.CREATED);

    }

    @PutMapping(params = "id")
    public ResponseEntity<statusResponceEntity> UpdateStudent(@RequestParam String id,@RequestBody requestDto dto){
        studentService.updateStudent(id, dto);
        return new ResponseEntity<>(new statusResponceEntity(
                200,
                "Student updated",
                null
        ),HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<statusResponceEntity> findStudent(@PathVariable String id){
       ;
        return new ResponseEntity<>(new statusResponceEntity(
                200,
                "Student Data",
                studentService.findStudent(id)
        ),HttpStatus.OK);

    }
    @DeleteMapping(params = "id")
    public ResponseEntity<statusResponceEntity> deleteStudent(@RequestParam String id){
        studentService.deleteStudent(id);
        return new ResponseEntity<>(new statusResponceEntity(
                204,
                "Deleted",
                null
        ),HttpStatus.NO_CONTENT);
    }

    // get all student
    @GetMapping(path="/all")
    public List<Student> AllStudents(){
        return studentService.findAllStudent();

    }


}
