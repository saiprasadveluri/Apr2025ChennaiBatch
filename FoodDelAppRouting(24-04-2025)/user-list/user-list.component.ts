import { Component } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { UserInfo, UserInfoNew } from '../user-info';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userDataNew:UserInfoNew[]=[]
  userData:UserInfo[]=[]
constructor(private http:HttpClient,private srv:DataSourceService,private router:Router) 
{
  
}
ngOnInit():void {
  this.srv.GetAllUser()
  // this.http.get<UserInfoNew[]>('http://localhost:3004/userInfo')
  .subscribe({
    next:(data)=>{
      this.userDataNew=data
    }
  })
  // this.userData=this.srv.GetAllUser()
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
  this.srv.DeleteUser(id).subscribe(
    {
      next:(_)=>{
        this.ShowGrid()
      }
    }
  )
}
GotoAddUser()
{
  this.router.navigate(['home/AddUser'])
}
EditUser(id:any):void
{
  this.router.navigate([`EditUser/${id}`])
}
}
