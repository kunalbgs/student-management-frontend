import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student: Student = { rollNumber: '', name: '', email: '', dateOfBirth: '' };

  constructor(private service: StudentService) {}

  save() {
    this.service.create(this.student).subscribe(() => {
      alert('Student added successfully!');
      this.student = { rollNumber: '', name: '', email: '', dateOfBirth: '' };
    });
  }
}
