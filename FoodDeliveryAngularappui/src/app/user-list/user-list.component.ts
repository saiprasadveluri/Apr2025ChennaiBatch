import { Component } from '@angular/core';
import { Userinfo } from '../userinfo';
import { DataSourseService } from '../data-sourse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userData:Userinfo[]=[];
  constructor(private srv:DataSourseService, private router:Router)
  {

  }
    ngOnInit():void{
      this.userData=this.srv.GetAllUsers();
    }
    GotoAddUser()
    {
      this.router.navigate(['AddUser']);
    }
}
