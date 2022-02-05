import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  template: `
    <p>
      course-list works!
    </p>  

    <div  (click)="navigation(x)" class='buttons'  *ngFor='let x of courseList; index as i'>
        <button>{{i}} {{x.Tech}}</button>
    </div>


    
  `,
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  public courseList=[
      { "id":1,"Name":"Kumar","Tech":"React"},
      {"id":2,"Name":"Manju","Tech":"Angular"},
      {"id":3,"Name":"Latha","Tech":"HTML"}
  ]


  constructor(private _route:Router) { }
  

  ngOnInit(): void {
  }

  navigation(y:any){
    console.log("navigation Reached");
this._route.navigate(['/course',y.id]);
  }

}
