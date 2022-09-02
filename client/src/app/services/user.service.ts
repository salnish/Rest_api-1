import { Observable } from 'rxjs';
import { UserData } from './../user-data';
import { User } from './../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _registerUrl="http://localhost:5000/api/users"
  private _loginUrl="http://localhost:5000/api/users/login"
  constructor(private http:HttpClient,private _router:Router) { }


  registerUser(user:User):Observable<UserData>{
    return this.http.post<UserData>(this._registerUrl,user,httpOptions)
  }

  loginUser(user:User){
    return this.http.post<UserData>(this._loginUrl,user,httpOptions)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
