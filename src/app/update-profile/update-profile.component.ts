

 import  { Component, OnInit }  from  '@angular/core';
 import  { Router }  from  '@angular/router';
 import  { User }  from  '../modal/Modal';
 import  { UserService }  from  '../service/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user: User = {} as User;
  progressBar = true;

  constructor(private userService: UserService) {}

 ngOnInit(): void {
     this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
    })
 }

  updateUser(idUser: any) {
    this.progressBar = true;
    this.userService.editUser(this.user).subscribe((user) => {
      this.user = user;
      this.userService.saveUsername(user.username);
      window.location.reload();
    });
  }
}
