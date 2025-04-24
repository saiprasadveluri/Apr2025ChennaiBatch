import { Component, OnInit } from '@angular/core';
import { UserInfo, UserInfoNew } from '../user-info';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userData:UserInfo[]=[];

  userDataNew:UserInfoNew[]=[];
  constructor(private srv:DatasourceService,private router:Router)
  {

  }
  ngOnInit(): void {
    this.ShowGrid()
    
      }
  
  private ShowGrid()
  {
    this.srv.GetAllUsers()
    //this.userData=this.srv.GetAllUsers();
   // this.http.get<UserInfoNew[]>("http://localhost:3004/userInfo")
    .subscribe({
      next:(data)=>{
        this.userDataNew=data;
      }
    }
      )};

  GotoAddUser()
  {
    this.router.navigate(["home/AddUser"])
  }
  EditUser(id:any):void
  {
    this.router.navigate([`home/EditUser/${id}`]);
  }

  DeleteUser(id:any)
  {
    this.srv.DeleteUser(id).subscribe(
      {
        next:(_)=>{
          this.ShowGrid();

        }
      });
  }

}
