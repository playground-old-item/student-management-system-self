import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-findall-student',
  templateUrl: './findall-student.component.html',
  styleUrl: './findall-student.component.scss'
})
export class FindallStudentComponent implements OnInit{
  size:number|undefined=5;
  page:number|undefined=0;

  pageEvent:PageEvent|undefined;
  studentArray:any=[];
  options=[5, 10, 25, 100];
  studentCount=0;
  constructor(private studentService:StudentService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.studentService.findAllStudent(this.size,this.page).subscribe(responce=>{
      this.studentArray=responce.data.datalist;
      this.studentCount=responce.data.count;
    })
  }

  getServerData(event?: PageEvent):any {
    this.page=event?.pageIndex;
    this.size=event?.pageSize;
    this.loadData();
  }
}
