import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.scss'
})
export class DeleteStudentComponent {
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
    deleteUser() {
        this.studentService.deleteUser(this.form.get('id')?.value!).subscribe(responce=>{
            alert("deleted!");
            console.log(responce)
        },error => {
            console.log(error)
        })
    }
}
