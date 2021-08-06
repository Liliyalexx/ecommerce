import  { Component, OnInit }  from  '@angular/core';
 import  { Router }  from  '@angular/router';
 import  { User }  from  '../modal/Modal';
 import  { UserService }  from  '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {} as User;
  progressBar = true;

  constructor(private userService: UserService) {}

 ngOnInit(): void { }

  addUser() {
    this.progressBar = true;
    this.userService.addUser(this.user).subscribe((user) => {
      this.user = user;
      this.userService.saveUsername(user.username);
      window.location.replace('/');
    });
  }
}
