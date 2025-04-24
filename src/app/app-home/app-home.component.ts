import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { UserInfoNew } from '../user-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  userEmail: string = '';
  userPassword: string = '';
  constructor(private router: Router, private srv: DataSourceService) {

  }
  Login() {
    this.srv.GetAllUsers().subscribe((data) => {
      let loggedInUser: UserInfoNew | undefined = data.find((elm) => {
        return elm.email == this.userEmail && elm.password == this.userPassword;


      });
      if (loggedInUser != undefined) {
        let userRole = loggedInUser.role;
        if (userRole == "Admin") {
          this.router.navigate(['home']);
        }
        else if (userRole == 'owner') {
          this.router.navigate(['ownerhome'])
        }
      }

    });
  }
}
