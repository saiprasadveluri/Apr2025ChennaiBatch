import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserInfoNew } from '../rest-info';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit{
// EditUser(arg0: string|undefined) {
// throw new Error('Method not implemented.');
// }
  userData:UserInfo[]=[];
  Router: any;
  userDataNew:UserInfoNew[]=[];
  constructor(private http:HttpClient, private srv:DataSourceService,private router:Router){

  }
  ngOnInit(): void {
    // this.http.get<UserInfoNew[]>('http://localhost:3004/userInfo').subscribe({ 
    this.srv.GetAllUsers().subscribe({
      next:(data)=>{
        this.userDataNew=data;
      }
    });
        
  }
  private ShowGrid(){
    this.srv.GetAllUsers().subscribe({
      next:(data)=>{
        this.userDataNew=data;
      }
    });
  }

  DeleteUser(id:any){
    this.srv.DeleteUser(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    });
    // return this.http.delete(`${this.baseAddress}userInfo/${id}`);
  }

  GotoAddUser(){
    this.router.navigate(['home/adduser']);
  }
  EditUser(id:any)
   {
      this.router.navigate([`home/edituser/${id}`]);
   }
}