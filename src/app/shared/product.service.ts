import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Product[];
  cartItems: Product[];
  total: number = 0;

  constructor(public formBuilder: FormBuilder, private http: HttpClient) { }
  
  readonly baseURI = 'http://localhost:8201/api';

  formModel = this.formBuilder.group({
    ProductID: [''],
    ProductName: [''],
    ProductCategory: [''],
    SubCategory: [''],
    ProductPrice: [''],
    ProductPreviousPrice: [''],
    ProductBrand: [''],
    ProductMass: [''],
    ProductBarcode: [''],
    ProductImage: ['']
  });

  addProduct(){

    var body = {
      ProductName: this.formModel.value.ProductName,
      ProductCategory: this.formModel.value.ProductCategory,
      SubCategory: this.formModel.value.SubCategory,
      ProductPrice: this.formModel.value.ProductPrice,
      ProductPreviousPrice: this.formModel.value.ProductPreviousPrice,
      ProductBrand: this.formModel.value.ProductBrand,
      ProductMass: this.formModel.value.ProductMass,
      ProductBarcode: this.formModel.value.ProductBarcode,
      ProductImage: this.formModel.get('ProductImage').value
    };
    return this.http.post(this.baseURI + '/Product/AddProduct', body);
  }
  DeleteProduct(id: number){
    return this.http.delete(this.baseURI + '/Product/DeleteProduct/' + id);
  }
  updateProduct(){

    var product = {
      ProductID: this.formModel.value.ProductID,
      ProductName: this.formModel.value.ProductName,
      ProductCategory: this.formModel.value.ProductCategory,
      ProductPrice: this.formModel.value.ProductPrice,
      ProductPreviousPrice: this.formModel.value.ProductPreviousPrice,
      ProductBrand: this.formModel.value.ProductBrand,
      ProductMass: this.formModel.value.ProductMass,
      ProductBarcode: this.formModel.value.ProductBarcode,
      ProductImage: this.formModel.value.ProductImage
    };
    return this.http.put(this.baseURI + '/Product/UpdateProduct/' + this.formModel.controls.ProductID.value, product);
  }
  listProducts(){
  this.http.get(this.baseURI + '/Product')
    .toPromise().then(response => this.list = response as Product[]);
  

  }
  removeAllProductsFromCart() {
    return localStorage.removeItem("product");
  }

  IncrementItemCount(product)
  {
    product.cartItemCount++;
  }
  DecrementItemCount(product)
  {
    if(product.cartItemCount < 1){
      product.cartItemCount = 1;
    }else{
      product.cartItemCount--;
    }
  }
  AddItemToTrolley(product){
    localStorage.setItem("product", JSON.stringify(product));
  
  }
  RemoveItemFromCart(product){
   localStorage.removeItem(product);
  }
  GetCartItemCount(){
    this.cartItems=this.getProductFromCart();
    this.total = this.cartItems.length;
    if(this.total != 0){
      return this.total;
    }
    else{
      return 0;
    }
  }
  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
  }
  
}
