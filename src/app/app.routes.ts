import { Routes } from '@angular/router';
import { StudentFormComponent } from './student/student-form.component';
import { StudentListComponent } from './student/student-list.component';

export const routes: Routes = [
  { path: '', component: StudentFormComponent },
  { path: 'list', component: StudentListComponent }
];
