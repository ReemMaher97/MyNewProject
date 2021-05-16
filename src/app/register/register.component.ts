import { GlopalService } from './../glopal.service';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lregister',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UsersService) { }

  ngOnInit(): void {
    //this.service.getAllUsers();
    this.service.user={
      id:0,
      userName:"",
      password:""

    }
  }
submit()
{
  this.service.addUsers().subscribe(res=>
    {
      this.service.getAllUsers()
    },err=>
    {
      console.log(err)
    })


}
}
