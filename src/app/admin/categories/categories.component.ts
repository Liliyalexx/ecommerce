

 import  { Component, OnInit }  from  '@angular/core';
 import  { AddTagToProductComponent}  from  '../add-tag-to-product/add-tag-to-product.component';
 import  { Product, Category, User, Tag, Comment}  from  '../../modal/Modal';
 import  { AddProductComponent}  from  '../add-product/add-product.component';
 import  { AddCategoryComponent}  from  '../add-category/add-category.component';
 import  { UserService}  from  '../../service/user.service';
 import  { MatDialog}  from  '@angular/material/dialog';
 import  { CategoryService}  from  '../../service/category.service';
 import  { ProductService}  from  '../../service/product.service';
 import  { ActivatedRoute}  from  '@angular/router';
 import  { TagService}  from  'src/app/service/tag.service';
 import  { CommentService}  from  'src/app/service/comment.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products: Product[] = [];
  user: User = {} as User;
 category: Category = {} as Category;
  idCategory!: number;
  panelOpenState!: boolean;
  tags!: Tag[];
  comments!: Comment[];
  getUsername: any;

  constructor(private productService: ProductService, private categoryService: CategoryService,
    private route: ActivatedRoute, private dialog: MatDialog, private userService: UserService,
     private tagService: TagService, private commentService: CommentService) {
    this.route.params.subscribe(
      params => {
        this.idCategory = this.route.snapshot.params.idCategory;
        this.categoryService.findCategoryById(this.idCategory).subscribe((category: any) => {
          this.category = category;
          this.productService.findProductsForCategory(this.idCategory).subscribe((products: any[]) => {
            this.products = products;
          });
        })
        this.userService.findByUsername(this.getUsername()).subscribe((user: any)=> {
          this.user = user;
        });
        this.commentService.findAllComments().subscribe(comments => {
          this.comments = comments;
        })
      }
    )
  }

  ngOnInit(): void { }

   addTag(idProduct: any) {
    this.dialog.open(AddTagToProductComponent, {
      data: { idProduct }
    })
  }
  showTags(idProduct: number) {
    this.tagService.findTagsForProduct(idProduct).subscribe(tags => {
      this.tags = tags;
    })
  }
  deleteCategory(idCategory: any, idUser: any) {
     if (confirm("Are you sure")) {
      this.categoryService.deleteCategory(idCategory).subscribe(() => {
      window.location.replace(`/profile/${idUser}`)
      })
    }
  }
  editCategory(idCategory: any) {
    this.dialog.open(AddCategoryComponent, {
    data: { idCategory }
    })
  }
  deleteProduct(idProduct: any, idUser: any) {
      if (confirm("Are you sure")) {
      this.productService.deleteProduct(idProduct).subscribe(() => {
      window.location.replace(`/profile/${idUser}`)
      })
    }
  }
  editProduct(idProduct: any) {
    this.dialog.open(AddProductComponent, {
    data: { idProduct }
    })
  }
  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(() => {
    window.location.reload();
    })
  }
}
