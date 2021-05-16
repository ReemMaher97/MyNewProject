import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersService } from './../users.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(public service:UsersService) { }
  length = 5;
  pageSize =2 ;
  pageIndex = 0;
  pageSizeOptions = [2,4 , 5];
  showFirstLastButtons = true;


  ngOnInit(): void {
    this.service.getAllProducts();

  }
  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    console.log(event)

  }

}
