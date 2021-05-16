import { element } from 'protractor';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conactus',
  templateUrl: './conactus.component.html',
  styleUrls: ['./conactus.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(0, style({opacity: 1}))
      ])
    ])
  ]
})
export class ConactusComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.func4();

  }
  // gg =document.getElementsByClassName("tab_content");
  func4()
  {
      //$(".tab_content").hide();
      let els3 = document.getElementsByClassName("tab_content")  as HTMLCollectionOf<HTMLElement>;
        var i:number;
        for (i = 0; i < els3.length; i++) {
          els3[i].style.display = "none";
          //console.log(els3[i]);

        }


     // $(".tab_content:first").show();
     let els2 = document.getElementsByClassName("tab_content")  as HTMLCollectionOf<HTMLElement>;
       els2[0].style.display = "block";

  }


  func(event:any)
  {
        let els = document.getElementsByClassName("tab_content")  as HTMLCollectionOf<HTMLElement>;
        var i:number;
        for (i = 0; i < els.length; i++) {
          els[i].style.display = "none";
         // console.log(els[i]);

        }
        let theDiv: HTMLElement = document.getElementById("tabs") as HTMLElement;
        console.log(theDiv);
        console.log(event);
        theDiv.hidden=true;
        //console.log( $(".tab_content"));
        console.log(theDiv.hidden);
        theDiv.hidden=false;
        console.log(theDiv.hidden);
       // console.log(els);
        console.log(els.length);

        var element = document.querySelector('.event');
        var dataAttribute = event.getAttribute('rel');
        // replace "data-name" with your data attribute name
        console.log("hi");
        console.log(dataAttribute);
        console.log("hi");
        //================jquery
        var activeTab = $(event).attr("rel");
        $("#"+activeTab).fadeIn();
        //this.fadeIn("tab2");
        //in ang
        let tabcontent:HTMLElement = document.getElementsByClassName("tabs")[0] as HTMLElement;
        tabcontent.classList.remove("active");
        //==========
        //==========================
      //======
      let tabdrawer:HTMLElement = document.getElementsByClassName("tab_drawer_heading")[0] as HTMLElement;

      tabdrawer.classList.remove("d_active");
      //=======
      //========================
      let tabdrawer2:HTMLElement = document.getElementsByClassName("tab_drawer_heading")[0] as HTMLElement;
      tabdrawer2.classList.add("d_active");
      //=======================
      console.log(activeTab)

  }

func3(event :any)
{
  let els:HTMLCollection = document.getElementsByClassName("tab_content")  as HTMLCollectionOf<HTMLElement>;
  $(".tab_content").hide();
  $("ul.tabs li").removeClass("active");
  $(event).addClass("active");
  $(".tab_drawer_heading").removeClass("d_active");
 // $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
}
 fadeIn(elementToFade:string)
        {

            let element : HTMLElement= document.getElementById(elementToFade) as HTMLElement;
            console.log("fadein")
            element.style.opacity += 0.1;
            if(parseFloat(element.style.opacity )> 1.0) {
                element.style.opacity+= 1.0;
            }
        }

}
