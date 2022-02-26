import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadJsonService {

  constructor(private http:HttpClient) { }
  private _url_jokes = 'https://api.npoint.io/c579c478915d74d39ac3';
  private _url_quotes = 'https://api.npoint.io/603e3448c3d3143fff80';
  private _url_dialogues = 'https://api.npoint.io/658e1390bd8f4a183af3';
  private _url_getVisits= 'https://api.countapi.xyz/update/joqes/joqesVisits/?amount=1';
  


  getJoke() : Observable<any>{
    return this.http.get<any>(this._url_jokes,{headers:{'Accept':'application/json'}});
  }

  getquote() : Observable<any>{
    return this.http.get<any>(this._url_quotes,{headers:{'Accept':'application/json'}});
  }

  getdialogue() : Observable<any>{
    return this.http.get<any>(this._url_dialogues,{headers:{'Accept':'application/json'}});
  }

  getVisits() : Observable<any>{
    return this.http.get<any>(this._url_getVisits,{headers:{'Accept':'application/json'}});
  }


}
