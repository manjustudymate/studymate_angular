import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentInterface } from './studentInterface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url1="../assets/data/studentJson.json";
  constructor(private _http:HttpClient) { }
  getStudents() : Observable<studentInterface[]> {
  return this._http.get<studentInterface[]>(this.url1); 
  }
}
 