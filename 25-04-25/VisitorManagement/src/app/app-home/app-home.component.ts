import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
 
  constructor(private authService: AuthService, private router: Router) { }
 
  onLogin() {
    this.authService.login(this.username, this.password).subscribe(users => {
      if (users.length > 0) {
        // Login successful, navigate to another page
        this.router.navigate(['/visitors']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }

}
