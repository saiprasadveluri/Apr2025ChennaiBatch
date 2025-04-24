import { Component, OnInit } from '@angular/core';
import { UserInfo, UserInfoNew } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  userD:UserInfo[] = [];
  UserDNew:UserInfoNew[] = [];
  constructor(private http:HttpClient, private srv:DataSourceService,private router:Router){

  }
  ngOnInit(): void {
    // this.http.get<UserInfoNew[]>("http://localhost:3004/userInfo")
    this.srv.getAlluser().subscribe({
      next:(data)=>{
        this.UserDNew = data;
      }
    });
    // this.userD=this.srv.getAlluser();
  }
  GotoAddUser(){
    this.router.navigate(['home/adduser'])
  }
  private ShowGrid(){
    this.srv.getAlluser().subscribe({
      next:(data)=>{
        this.UserDNew = data;
      }
    });
  }
  DeleteUser(id:any) {
    this.srv.DeleteUser(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
  EditUser(id:any): void {
    this.router.navigate([`home/EditUser/${id}`]);
    }

}
