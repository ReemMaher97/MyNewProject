import { GlopalService } from './../../glopal.service';
import { Injectable } from '@angular/core';
import {  CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private global:GlopalService,private rout:Router) { }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


  if( this.global.isAuth)
  {
    console.log("canActive");

  }
  else
  {
    this.rout.navigate(['./signin'])
    console.log("go to sign in");
  }
    return this.global.isAuth;

  }


}
