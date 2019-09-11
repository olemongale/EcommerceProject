import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { RegisterService } from './shared/register.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreshFoodComponent } from './fresh-food/fresh-food.component';
import { PantryComponent } from './pantry/pantry.component';
import { HouseHoldComponent } from './house-hold/house-hold.component';
import { BabyComponent } from './baby/baby.component';
import { HealthComponent } from './health/health.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './shared/product.service';
import { BakeryProductsComponent } from './bakery-products/bakery-products.component';
import { CartComponent } from './cart/cart.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FreshFoodComponent,
    PantryComponent,
    HouseHoldComponent,
    BabyComponent,
    HealthComponent,
    ElectronicsComponent,
    AddProductComponent,
    BakeryProductsComponent,
    CartComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [RegisterService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
