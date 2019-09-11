import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../product';
import { FormGroup } from '@angular/forms';
import { updateBinding } from '@angular/core/src/render3/instructions';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products: Product[];
  public response: any;
  uploadForm: FormGroup; 
  productImage:File;
  url: string;
  
  constructor(public service: ProductService, public Toastr: ToastrService) { }

  ngOnInit() {
  
    this.service.formModel.reset();
    this.service.listProducts();
    document.getElementById("btn-update").style.visibility = "collapse";
    
  }
  handleFile(file:FileList) {
    this.productImage = file.item(0);

  
  }
  onAddProduct(){
    
    this.service.addProduct().subscribe(
      (response:any) => {
        if(response.succeded){
          this.service.formModel.reset();
          this.Toastr.success("Added New Product", "Success!")
        } 
      },
      err => {
        console.log(err);
      }
    );
  }
  OnRemove(id: number){
    console.log("product" + id)
   this.service.DeleteProduct(id).subscribe(c => {
     this.service.listProducts();
     this.Toastr.success("Product is Removed", "Success!")
   });
  }
  SaveChanges(id: number, product: Product){
    this.service.updateProduct().subscribe(c => {
      this.service.listProducts();
      this.Toastr.success("Changes are Saved", "Success!")
      
    });
    
  }
  OnEdit(product: Product){
    document.getElementById('btn-submit').style.visibility = 'collapse';
    document.getElementById('btn-update').style.visibility = 'visible';
    this.service.formModel.controls.ProductID.setValue(product.productID)
    this.service.formModel.controls.ProductName.setValue(product.productName);
    this.service.formModel.controls.ProductCategory.setValue(product.productCategory);
    this.service.formModel.controls.ProductPrice.setValue(product.productPrice);
    this.service.formModel.controls.ProductBrand.setValue(product.productBrand);
    this.service.formModel.controls.ProductMass.setValue(product.productMass);
    this.service.formModel.controls.ProductBarcode.setValue(product.productBarcode);

  }

}
