

 import  { Component, OnInit }  from  '@angular/core';
 import  { Router, ActivatedRoute }  from  '@angular/router';
 import  { Product }  from  '../modal/Modal';
 import  { ProductService }  from  '../service/product.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {
  products: Product[] = [];
  product: Product = {} as Product;
  idCategory!: number;
  orderFinished = false;
  showBtn = -1;
  showMyContainerInfo = false;

 constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router) {
    this.route.params.subscribe(
      params => {
        this.idCategory = this.route.snapshot.params.idCategory;
        this.productService.findProductsForCategory(this.idCategory).subscribe(products => {
          this.products = products;
        }
        );
      }
    )
  }

  ngOnInit(): void { }

  showUndoBtn(index: number) {
    this.showBtn = index;
  }

  productInfo(id: number) {
    this.productService.findProductById(id).subscribe(product => {
      this.product = product;
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }

  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }
}
