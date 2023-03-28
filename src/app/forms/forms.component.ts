import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{

  // form: any= {};
  isSubmitted: boolean = true

  constructor(private studentService: StudentService){}

  ngOnInit(): void {
  }


  onStudenSave(studentForm: NgForm) {
    this.studentService.saveStudent(studentForm)
    console.log("create student submited" + studentForm.value.firstname);
  }

}
