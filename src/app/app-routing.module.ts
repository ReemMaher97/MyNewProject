import { SignInComponent } from './sign-in/sign-in.component';
import { ContentComponent } from './content/content.component';
import { RegisterComponent } from './register/register.component';
import {FavoritesComponent  } from "./favorites/favorites.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [

  {
    path:'login',
    component:RegisterComponent,
    pathMatch:'full'
  }
  ,
  {
    path:'signin',
    component:SignInComponent,
    pathMatch:'full'
  }
  ,
  {
    path:'products',
    component:ProductsComponent,
    pathMatch:'full'
  }
  ,
  {
    path:'Favorites',
    component:FavoritesComponent,
    pathMatch:'full',
    canActivate :[AuthGuard]
  }
  ,
  {
    path:'',
    component:ContentComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
