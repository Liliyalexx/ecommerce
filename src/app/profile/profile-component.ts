
 import  { Component, OnInit }  from  '@angular/core';
 import  { Router, ActivatedRoute }  from  '@angular/router';
 import  { User, Cart, Category }  from  '../modal/Modal';
 import  { AddTagComponent }  from  '../admin/add-tag/add-tag.component';
 import  { CategoryService }  from  './../service/category.service';
 import  { MatDialog }  from  '@angular/material/dialog';
 import  { UserService }  from  './../service/user.service';
 import  { AddCategoryComponent }  from  '../admin/add-category/add-category.component';
 import  { AddProductComponent }  from  '../admin/add-product/add-product.component';
 import  { UpdateProfileComponent }  from  '../update-profile/update-profile.component';
 import  { CartService }  from  '../service/cart.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  categories!: Category[];
  carts!: Cart[];
  user: User = {} as User;
  cartLength = 0;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.userService
        .findByUsername(this.userService.getUsername())
        .subscribe((user) => {
          this.user = user;
          this.cartService.findCartsForUser(this.user.id).subscribe((carts) => {
            this.carts = carts;
            this.cartLength = this.carts.length;
          });
          this.categoryService.findAllCategories().subscribe((categories) => {
            this.categories = categories;
          });
        });
    });
  }

ngOnInit(): void { }

  logout(id: number) {
    window.location.replace('/dashboard');
    this.userService.signOut();
  }

  addCategory(idUser: number) {
    this.dialog.open(AddCategoryComponent, {
      data: { idUser },
    });
  }

  addProduct(idCategory: any) {
    this.dialog.open(AddProductComponent, {
      data: { idCategory },
    });
  }

  addTag() {
    this.dialog.open(AddTagComponent);
  }

  updateProfile() {
    this.dialog.open(UpdateProfileComponent);
  }

  deleteCart(idPro: number, idUser: number) {
    if (confirm('Are you sure')) {
      this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
        window.location.reload();
      });
    }
  }

  sangleProduct(name: any) {
    this.router.navigate(['/puy/product/', name]);
  }
}
