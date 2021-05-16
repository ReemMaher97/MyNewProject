import { GlopalService } from './glopal.service';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Renderer2,  Inject } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private _ren :Renderer2 , @Inject(DOCUMENT) private _document: Document,public service:UsersService,public global:GlopalService){}


  ngOnInit(): void {

    let script = this._ren.createElement('script');
        script.type = `application/ld+json`;
        script.text = `
            {

        `;

        this._ren.appendChild(this._document.body, script);
        this.service.user={
          id:0,
          userName:"",
          password:""

        }
  }
  title = 'project';

isAuth:boolean=this.global.isAuth;
  isRegester()
  {


  }

}
