import  { Component, Inject, OnInit }  from  '@angular/core';
 import  { CategoryService }  from  '../../service/category.service';
 import  { Category }  from  '../../modal/Modal';
 import  { MAT_DIALOG_DATA }  from  '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = {} as Category;
  progressBar = false;
  showProgressBar!: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoryService: CategoryService) { }

  ngOnInit(): void {
    if (this.data.idCategory != null) {
      this.categoryService.findCategoryById(this.data.idCategory).subscribe((category: Category) => {
        this.category = category;
      })
    }
  }
  addCategory() {
    this.showProgressBar = true;
    if (this.data.idCategory != null) {
      this.categoryService.editCategory(this.category, this.data.idCategory).subscribe((category: Category) => {
        this.category = category;
        window.location.reload();
      })
     } else {
      this.categoryService.addCategoryToUser(this.category, this.data.idUser).subscribe((category: Category) => {
        this.category = category;
        window.location.reload();
      })
    }
  }
}
