import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './POS/products/products.component';
import { PopularComponent } from './POS/popular/popular.component';
import { FoodsComponent } from './POS/foods/foods.component';
import { CoffeeComponent } from './POS/coffee/coffee.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'foods', component: FoodsComponent }, 
  { path: 'coffee', component: CoffeeComponent },
  { path: '', redirectTo:'/products' , pathMatch: 'full' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
