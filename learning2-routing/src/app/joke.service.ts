import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private _url = 'https://icanhazdadjoke.com/';
  private _url1='https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0';
  constructor(private http:HttpClient) { }

  get() : Observable<any>{
    return this.http.get<any>(this._url1,{headers:{'Accept':'application/json'}});
  }
}
