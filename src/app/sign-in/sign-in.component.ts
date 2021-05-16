import { GlopalService } from './../glopal.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public service:UsersService,public global:GlopalService) { }

  ngOnInit(): void {

    this.service.user={
      id:0,
      userName:"",
      password:""

    }
    this.global.isAuth=false;


  }
  LoggState:string="Login";



submit()
{
  this.service.userexist().subscribe(res=>
    {
      if(res==true)
      {
        console.log("regester")
        console.log(res)
        this.global.isAuth=true;
        this.LoggState="LogOut"
      }
      else if(res==false){
        console.log(" not regester")
        console.log(res)
        this.global.isAuth=false;
        this.LoggState="Login"
      }

    },err=>
    {
      console.log(err)

    })


}



  toggle()
  {
this.global.isAuth=!this.global.isAuth;
this.LoggState=this.global.isAuth?"LogOut":"Login";
  }
}
