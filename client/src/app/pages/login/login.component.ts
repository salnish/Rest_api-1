import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData:User ={
    email:'',
    password:''
  }
  errorMsg:string=''
  constructor(private _userAuth:UserService,private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._userAuth.loginUser(this.loginUserData)
    .subscribe(
      res =>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/goals'])
      },
      err => {
        console.log(err)
        if( err instanceof HttpErrorResponse) {
          this.errorMsg =err.error.message
          console.log(err.error)
          }
        }
    )
  }

}
