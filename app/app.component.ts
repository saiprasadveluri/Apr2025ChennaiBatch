import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: any;
login() :void{
  localStorage.removeItem('userRole');
this.router.navigate(['/']);
}
  title = 'VisitorManagement';
visitorList: any;
}
