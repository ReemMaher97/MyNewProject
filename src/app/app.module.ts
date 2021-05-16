import {MatPaginatorModule} from '@angular/material/paginator';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from './services/guards/auth.guard';
import { GlopalService } from './glopal.service';
import { ConactusComponent } from './conactus/conactus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from "jquery";
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    RegisterComponent,
    SignInComponent,
    FavoritesComponent,
    ConactusComponent,
    ProductsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule

  ],
  providers: [GlopalService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
