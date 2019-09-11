import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FreshFoodComponent } from './fresh-food/fresh-food.component';
import { PantryComponent } from './pantry/pantry.component';
import { HouseHoldComponent } from './house-hold/house-hold.component';
import { BabyComponent } from './baby/baby.component';
import { HealthComponent } from './health/health.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BakeryProductsComponent } from './bakery-products/bakery-products.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
{path: '', component: HomeComponent, pathMatch: 'full'},
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'fresh-food', component: FreshFoodComponent},
{path: 'pantry', component: PantryComponent},
{path: 'house-hold', component: HouseHoldComponent},
{path: 'baby', component: BabyComponent},
{path: 'health', component: HealthComponent},
{path: 'electronics', component: ElectronicsComponent},
{path: 'add-product', component: AddProductComponent},
{path: 'bakery-products', component: BakeryProductsComponent},
{path: 'cart', component: CartComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
