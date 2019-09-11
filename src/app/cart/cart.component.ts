import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
trolley: number = 0;
trolleyTotalPrice: number =  0;
cartItems: Product[];
  trolleyTotal: number;
  price: number;
  constructor(private service: ProductService) {
    
  }

  ngOnInit() {
    this.trolley = this.service.GetCartItemCount();
    this.cartItems = this.service.getProductFromCart();
    this.trolleyTotal = this.TrolleyTotal();
    
  }
  TrolleyTotal()
 {
  let total=0;
  for (let i in this.cartItems) {
   this.price  = parseFloat(this.cartItems[i].productPrice);
    total= total+(this.cartItems[i].cartItemCount * this.price);
 }
 
 return this.trolleyTotal=total;
 }
 OnRemoveItem(id){
  for(var i = 0; i < this.cartItems.length; i++) {
    if(this.cartItems[i].productID == id) {
      this.cartItems.splice(i, 1);
      this.service.AddItemToTrolley(this.cartItems);
      this.service.getProductFromCart();
      this.TrolleyTotal();
      this.trolley = this.service.GetCartItemCount();
      break;
    }
 }
}

OnIncrease(product){
  let total = 0;
  this.cartItems = this.service.getProductFromCart();
  this.cartItems.find(pr=>pr.productID==product.productID).cartItemCount = product.cartItemCount+1;
  this.service.AddItemToTrolley(this.cartItems);
  this.TrolleyTotal();
}

OnReduce(product){
  let total = 0;
  this.cartItems=this.service.getProductFromCart();
  this.cartItems.find(pr=>pr.productID==product.productID).cartItemCount = product.cartItemCount-1;
  this.service.AddItemToTrolley(this.cartItems);
  this.TrolleyTotal();
}
}
