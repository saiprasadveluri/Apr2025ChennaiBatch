import { Component } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { UserInfo } from '../user-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
userData:UserInfo[]=[]
constructor(private srv:DataSourceService,private router:Router) 
{
  
}
ngOnInit():void {
  this.userData=this.srv.GetAllUser()
}
GotoAddUser()
{
  this.router.navigate(['AddUser'])
}
}
