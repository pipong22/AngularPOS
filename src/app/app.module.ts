import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PopularComponent } from './POS/popular/popular.component';
import { FoodsComponent } from './POS/foods/foods.component';
import { CoffeeComponent } from './POS/coffee/coffee.component';
import { ProductsComponent } from './POS/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    FoodsComponent,
    CoffeeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
