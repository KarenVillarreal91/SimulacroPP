import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://restcountries.com/v2/alpha?codes=arg,col,esp,us";

  constructor(private http:HttpClient) { }

  ObtenerPaises(){
    
    return this.http.get(this.url);
  }
}
