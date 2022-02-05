import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'student' , component:StudentListComponent},
  {path:'course' , component:CourseListComponent},
  {path : "**" , component: StudentListComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const MyRouters = [
  StudentListComponent, CourseListComponent
]
