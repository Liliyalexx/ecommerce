

 import  { Component, Inject, OnInit }  from  '@angular/core';
 import  { ProductService }  from  '../service/product.service';
 import  { Product}  from  '../modal/Modal';
 import  { MAT_DIALOG_DATA }  from  '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {} as Product;
  progressBar = false;
  showProgressBar: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService) { }

  ngOnInit(): void {
    if (this.data.idProduct != null) {
      this.productService.findProductById(this.data.idProduct).subscribe(product => {
        this.product = product;
      })
    }
  }
  addProduct() {
    this.showProgressBar = true;
    if (this.data.idProduct != null) {
      this.productService.editProduct(this.product, this.data.idProduct).subscribe(product => {
        this.product = product;
        window.location.reload();
      })
     } else {
      this.productService.addProductToCategory(this.product, this.data.idCategory).subscribe(product => {
        this.product = product;
        window.location.reload();
      })
    }
  }
}
