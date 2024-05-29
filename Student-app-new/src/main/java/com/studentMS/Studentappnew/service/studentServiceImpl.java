package com.studentMS.Studentappnew.service;

import com.studentMS.Studentappnew.dto.paginated.paginatedStudentDto;
import com.studentMS.Studentappnew.dto.requestDto;
import com.studentMS.Studentappnew.dto.responcedto;
import com.studentMS.Studentappnew.model.Student;
import com.studentMS.Studentappnew.repository.StudentRepo;
import com.studentMS.Studentappnew.util.IdGenerator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class studentServiceImpl implements StudentService{
    private final StudentRepo studentRepo;
    private final IdGenerator idGenerator;
    public studentServiceImpl(StudentRepo studentRepo, IdGenerator idGenerator) {
        this.studentRepo = studentRepo;
        this.idGenerator = idGenerator;
    }

    @Override
    public String saveStudent(requestDto dto) {
        Student s=new Student(
                idGenerator.GenerateId(3,"ST001 - "),
                dto.getFirstName(),
                dto.getLastName(),
                dto.getEmail()
        );
        Student student = studentRepo.save(s);
        return student.toString();
    }

    @Override
    public String updateStudent(String id, requestDto dto) {

        Optional<Student> selectedStudent = studentRepo.findById(id);
        if(selectedStudent.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Student student = selectedStudent.get();
        student.setFirstName(dto.getFirstName());
        student.setLastName(dto.getLastName());
        student.setEmail(dto.getEmail());
        studentRepo.save(student);
        return "Updated";
    }

    @Override
    public void deleteStudent(String id) {

        studentRepo.deleteById(id);

    }

    @Override
    public responcedto findStudent(String id) {
        Optional<Student> selectedStudent = studentRepo.findById(id);
        if(selectedStudent.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return new responcedto(
                selectedStudent.get().getId(),
                selectedStudent.get().getFirstName(),
                selectedStudent.get().getLastName(),
                selectedStudent.get().getEmail()
        );
    }

    @Override
    public paginatedStudentDto findAll(int size, int page) {
        long count=studentRepo.count();
        Page<Student> all = studentRepo.findAll(PageRequest.of(page, size));
        List<responcedto> dtos=new ArrayList<>();
        for (Student s:all
             ) {
            dtos.add(new responcedto(
                    s.getId(),
                    s.getFirstName(),
                    s.getLastName(),
                    s.getEmail()

            ));

        }
        return new paginatedStudentDto(count,dtos);
    }

    @Override
    public List<Student> findAllStudent() {

        return studentRepo.findAll();
    }


}
