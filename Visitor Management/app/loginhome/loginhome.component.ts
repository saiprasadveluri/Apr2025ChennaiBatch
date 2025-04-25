import { Component } from '@angular/core';
import { HostInfo } from '../host-info';
import { Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.scss']
})
export class LoginhomeComponent {
  d: HostInfo[] = []
  usEmail: string = '';
  usPwd: string = '';

  constructor(private router: Router, private srv: DatasourceService) { }

  Login() {
    this.srv.getHost().subscribe((d) => {
      let logged: HostInfo | undefined = d.find(record => record.email === this.usEmail && record.password === this.usPwd);

      if (logged != undefined) {
        sessionStorage.setItem('UserData', JSON.stringify(logged));
        console.log('Login successful!');
        let usrole = logged.User;
        if (usrole == "Manager") {
          this.router.navigate(['home']);
        }
        else if (usrole == "Host") {
          this.router.navigate(['host']);
        }
      } else {
        // this.router.navigate(["host"]);
        console.log('Invalid credentials. Please try again.');
      }
    });
  }
}
