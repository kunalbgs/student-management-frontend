import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: Student = {
    rollNumber: '',
    name: '',
    email: '',
    dateOfBirth: ''
  };

  formError = false;
  isEditMode = false;

  constructor(
    private service: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.service.getById(+id).subscribe(data => {
        this.student = data;
      });
    }
  }

  save(form: NgForm) {
    if (form.invalid) {
      this.formError = true;
      return;
    }

    this.formError = false;

    if (this.isEditMode) {
      this.service.update(this.student.id!, this.student).subscribe(() => {
        alert('Student updated successfully!');
        this.router.navigate(['/list']);
      });
    } else {
      this.service.create(this.student).subscribe(() => {
        alert('Student added successfully!');
        this.student = { rollNumber: '', name: '', email: '', dateOfBirth: '' };
        form.resetForm();
      });
    }
  }

  allowOnlyDigits(event: KeyboardEvent) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  allowOnlyLetters(event: KeyboardEvent) {
    if (!/[a-zA-Z ]/.test(event.key)) {
      event.preventDefault();
    }
  }
}
