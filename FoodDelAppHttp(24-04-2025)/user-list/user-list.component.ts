import { Component, OnInit } from '@angular/core';
import { UserInfo, UserInfoNew } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
userData:UserInfo[]=[]
userDataNew:UserInfoNew[]=[]
constructor(private http:HttpClient, private srv:DataSourceService,private router:Router)
{
  
}
  ngOnInit(): void {
    this.ShowGrid()
    // this.srv.GetAllUser()
    // //this.http.get<UserInfoNew[]>('http://localhost:3004/userInfo')
    // .subscribe({
    //   next:(data)=>{
    //     this.userDataNew=data
    //   }
    // })
    // //this.userData=this.srv.GetAllUser()
  }
  GotoAddUser()
  {
    this.router.navigate(['AddUser'])
  }
  GotoAddRest()
  {
    this.router.navigate(['AddRest'])
  }
  private ShowGrid()
  {
    this.srv.GetAllUser()
    .subscribe({
      next:(data)=>{
        this.userDataNew=data
      }
    })
  }
  DeleteUser(id:any)
  {
    this.srv.DeleteUser(id).subscribe(//subscribe will have next(success) and eroors
      {
        next:(_)=>{
          this.ShowGrid()
        }
      }
    )
  }
  EditUser(id:any):void
  {
    this.router.navigate([`EditUser/${id}`])
  }
}
