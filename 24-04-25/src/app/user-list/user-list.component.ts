import { Component, OnInit } from '@angular/core';
import { UserInfo, UserInfoNew } from '../user-info';
import { DataSourceService } from '../datasource.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {
 
  userData:UserInfo[]=[];
  userDataNew:UserInfoNew[]=[];
    constructor( private srv:DataSourceService ,private router:Router)
  {
    // this.userData = this.srv.GetAllUsers();
  }
  ngOnInit(): void {
    this.srv.GetAllUsers()
    .subscribe({
      next:(data)=>{
        this.userDataNew=data;
      }
    });
   
 
  }
  private ShowGrid()
  {
    this.srv.GetAllUsers()
    .subscribe({
      next:(data)=>{
        this.userDataNew=data;
      }
    });
 
  }
  DeleteUser(id:any)
  {
    this.srv.DeleteUser(id).subscribe(
      {
        next:(_)=>
          {
            this.ShowGrid();
 
 
        }
      }
    );
 
  }
  GotoAddUser()
  {
    this.router.navigate(['home/AddUser']);
  }
  EditUser(id:any):void
  {
   this.router.navigate([`home/EditUser/${id}`]);
  }
}
 
 