import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url:String;
  constructor(
    public _http: HttpClient
  ) { 
    this.url = "http://localhost:8080/api/v1/"
  }
  getUser(): Observable<any>{
    return this._http.get(this.url+'user')
  }
}
