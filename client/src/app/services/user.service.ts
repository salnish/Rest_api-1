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
  constructor(private http:HttpClient,private _router:Router) { }


  registerUser(user:User){
    return this.http.post<UserData>(this._registerUrl,user,httpOptions)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
