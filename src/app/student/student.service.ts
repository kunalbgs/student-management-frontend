// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Student } from './student.model';
// import { Observable } from 'rxjs';
//
// @Injectable({ providedIn: 'root' })
// export class StudentService {
//   private apiUrl = 'http://localhost:8080/api/students';
//
//   constructor(private http: HttpClient) {}
//
//   getAll(): Observable<Student[]> {
//     return this.http.get<Student[]>(this.apiUrl);
//   }
//
//   create(student: Student): Observable<Student> {
//     return this.http.post<Student>(this.apiUrl, student);
//   }
// }
//


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) {}

  // ✅ GET all students
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // ✅ GET student by ID
  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // ✅ POST new student
  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // ✅ PUT update student
  update(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  // ✅ DELETE student
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
