import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {

  userData:UserInfo[]=[];
  constructor(private srv:DataSourceService ,private router:Router)
  {
    this.userData = this.srv.GetAllUsers();
  }
  ngOnInit(): void {
   this.userData = this.srv.GetAllUsers();
  }
  GotoAddUser()
  {
    this.router.navigate(['AddNewUser']);
  }
}
