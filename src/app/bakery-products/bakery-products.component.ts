import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../product';
import { DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bakery-products',
  templateUrl: './bakery-products.component.html',
  styleUrls: ['./bakery-products.component.css']
})
export class BakeryProductsComponent implements OnInit {
  total: number = 0;
  cart: Product[];


  constructor(public service: ProductService, private router: Router) { }

  ngOnInit() {
  
    this.service.listProducts();
    this.total = this.service.GetCartItemCount();
    
  }
  
  OnCartDecrement(product){
   this.service.DecrementItemCount(product);
   
  }
 OnCartIncrement(product)
 {
  this.service.IncrementItemCount(product);
 }
 OnAddTrolley(product){
this.cart = this.service.getProductFromCart();
  
  if(this.cart == null){
    this.cart = [];
    this.cart.push(product);
    this.service.AddItemToTrolley(this.cart);
    
    
    
  }
  else{
    let existingItem=this.cart.find(ep=>ep.productID==product.productID);
    if(existingItem == null){
      this.cart.push(product);
      this.service.AddItemToTrolley(this.cart);
      
      
    }
    this.total = this.service.GetCartItemCount();
  }
 }
 
}
 
