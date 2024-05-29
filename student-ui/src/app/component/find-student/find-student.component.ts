import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrl: './find-student.component.scss'
})
export class FindStudentComponent {
  form= new FormGroup({
    id:new FormControl('',Validators.required),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl('')
  });
  constructor(private studentService:StudentService) {}
  findUser() {
    this.studentService.findUser(
        this.form.get('id')?.value!
    ).subscribe(responce=>{
      this.form.patchValue({
        firstName:responce.data.firstName,
        lastName:responce.data.lastName,
        email:responce.data.email
          })


    })

  }
}
