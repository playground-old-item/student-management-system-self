import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent {

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
    updateUser() {
        this.studentService.updateStudent(
            this.form.get('firstName')?.value!,
            this.form.get('lastName')?.value!,
            this.form.get('email')?.value!,
            this.form.get('id')?.value!
        ).subscribe(responce=>{
            alert('Updated ! ');
            console.log(responce)
        },error => {
            console.log(error)
        })
    }
}
