import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseUrl='http://localhost:8000/api/v1';
  constructor(private httpService:HttpClient) { }


  savestudent(firstName:string,lastName:string,email:string):Observable<any>{
  return this.httpService.post(this.baseUrl+'/save',{
    firstname:firstName,
    lastName:lastName,
    email:email
  });

  }
  findUser(id:string):Observable<any>{
    return this.httpService.get(this.baseUrl+'/'+id);
  }

  deleteUser(id:string):Observable<any>{
    return this.httpService.delete(this.baseUrl+'?id='+id);
  }

  updateStudent(firstName:string,lastName:string,email:string,id:string):Observable<any>{
    return this.httpService.put(this.baseUrl+'?id='+id,{
      firstname:firstName,
      lastName:lastName,
      email:email
    });

  }
  findAllStudent(size:any,page:any):Observable<any>{
    return this.httpService.get(this.baseUrl+'/findall?size='+size+'&page='+page);
  }
}
