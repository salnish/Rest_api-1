import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:User ={
    name:'',
    email:'',
    password:''
  }
  errorMsg:string=''
 
  constructor(private _userAuth:UserService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._userAuth.registerUser(this.registerUserData)
    .subscribe(
      res=> {
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
