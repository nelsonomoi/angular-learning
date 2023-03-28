import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements  AfterViewInit {

  // @ViewChild("studentDataTable") studentDataTable: ElementRef


  ngAfterViewInit(): void {
    // this.studentDataTable.nativeElement.DataTable()
  }

}
