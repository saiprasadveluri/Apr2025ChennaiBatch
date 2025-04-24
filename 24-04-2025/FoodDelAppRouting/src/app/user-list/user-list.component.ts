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
  userData:UserInfo[]=[];
  userDataNew:UserInfoNew[]=[]
  constructor( private Srv:DataSourceService,private router:Router){//to get the methods from service

  }
  ngOnInit(): void {
    this.ShowGrid()
  }
    private ShowGrid(){
    this.Srv.GetAllUsers()
    //this.http.get<UserInfoNew[]>('http://localhost:3004/userInfo')
    .subscribe({
      next:(data)=>{
        this.userDataNew=data;
      }
    });
    //this.userData=this.Srv.GetAllUsers();
  }
  GotoAddUser(){
    this.router.navigate(['Home/AddUser'])
  }
  GotoAddRestaurant(){
    this.router.navigate(['Home/AddRestaurant'])
  }
  DeleteUser(id:any){
    this.Srv.DeleteUser(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
  EditUser(id:any):void{
    this.router.navigate([`Home/EditUser/${id}`])
  }
}
