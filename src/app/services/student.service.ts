import { Student } from './../models/student.model';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL  =  "http://localhost:8080/api/v1"

  POST_STUDENT = this.BASE_URL + "/student"

  GET_STUDENT = this.BASE_URL + "/students"

  student:any



  constructor(private http: HttpClient) { }

  saveStudent(form: NgForm) {
    this.student = {
      regNo: form.value.reg_no,
      firstname : form.value.firstname,
      middlename : form.value.middlename,
      lastname : form.value.lastname,
      email: form.value.email,
      phone: form.value.phone
    }


    this.http.post<any>(this.POST_STUDENT,this.student,httpOptions)
    .subscribe()

    
  }

  fetchAllStudents(){
    
    console.log(this.fetchAllStudents().subscribe(resp => {
      console.log(resp);
      
    }));

    return this.http.get<Student []>(this.GET_STUDENT,httpOptions)
  }
}
