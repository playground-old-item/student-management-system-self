import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-save-student',
  templateUrl: './save-student.component.html',
  styleUrl: './save-student.component.scss'
})
export class SaveStudentComponent implements OnInit{
  form= new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required)
  });

  constructor(private studentService:StudentService) {}

  saveStudent() {
    this.studentService.savestudent(
        this.form.get('firstName')?.value!,
        this.form.get('lastName')?.value!,
        this.form.get('email')?.value!
    ).subscribe(responce=>{
      alert('saved ! ');
      console.log(responce)
    },error => {
      console.log(error)
    })
  }

  ngOnInit(): void {
  }
}
