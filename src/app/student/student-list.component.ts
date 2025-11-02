import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';
import { Student } from './student.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private service: StudentService) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.service.delete(id).subscribe(() => {
        this.students = this.students.filter(s => s.id !== id);
      });
    }
  }
}
