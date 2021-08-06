import  { Component, OnInit }  from  '@angular/core';
import { MatDialog } from '@angular/material/dialog/public-api';
 import  { Router }  from  '@angular/router';
import { LoginComponent } from './login/login-component';
 import  { User, Category }  from  './modal/Modal';
 import  { CategoryService }  from  './service/category.service';
 import  { UserService }  from  './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories!: Category[];
  user: User = {} as User;


  constructor(public dialog: MatDialog, private userService: UserService, private categoryService: CategoryService) {
    this.userService.findByUsername(userService.getUsername()).subscribe(user => {
      this.user = user;
    })
  }
  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }

  login() {
    this.dialog.open(LoginComponent);
  }
}
