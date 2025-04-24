import { Component } from '@angular/core';
import { Userinfo, UserinfoNew } from '../userinfo';
import { DataSourseService } from '../data-sourse.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userData:Userinfo[]=[];
  userDataNew:UserinfoNew[]=[];

  constructor(private http:HttpClient,private srv:DataSourseService, private router:Router)
  {

  }
    ngOnInit():void{
      this.srv.GetAllUsers()
      //this.http.get<UserinfoNew[]>('http://localhost:3004')
      .subscribe({
        next:(data)=>{
          this.userDataNew=data;
        }
      });
     // this.userData=this.srv.GetAllUsers();
    }
    private ShowGrid()
    {
      this.srv.GetAllUsers()
      //this.http.get<UserinfoNew[]>('http://localhost:3004')
      .subscribe({
        next:(data)=>{
          this.userDataNew=data;
        }
      });
    }
    DeleteUser(id:any)
    {
      this.srv.deleteuser(id).subscribe(
        {
          next:(_)=>{
            this.ShowGrid();
          }
        }
      )
    }
            

          
    GotoAddUser()
    {
      this.router.navigate(['AddUser']);
    }
    EditUser(id:any):void
    {
      this.router.navigate([`home/EditUser/${id}`]);
    }
  }
