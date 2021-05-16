import { Products } from './products.model';
import { Users } from './users.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //url:string="http://localhost:50980/api/Users"
  url:string="https://localhost:44301/api"
  users: Users[] = [];
  user: Users = new Users;
  isregester:boolean=false;
  product:Products[]=[];
  constructor( private http:HttpClient ) { }

  getAllUsers():Observable<any[]>{
   return this.http.get<any>(this.url+'/users/get')

  }


  getAllProducts(){
    this.http.get(this.url+'/Products/get').toPromise().then(
      res =>{
        this.product=res as Products[];
        console.log(this.product)
        console.log(this.product.length)
      }
    )

   }
  postUser()
  {
    return this.http.post(this.url,this.user)
  }
  addUsers()
  {
    return this.http.post(this.url+'/users/adduser',this.user)
  }

  userexist()
  {
    return this.http.post(this.url+"/users/UserExist",this.user)
  }

}
