import { Component, OnInit } from '@angular/core';
import { Userinfo, UserInfoNow } from '../userinfo';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
userdata:Userinfo[]=[];
userdataNew:UserInfoNow[]=[];
constructor(private  http:HttpClient,private srv:DatasourceService,private router:Router ){

}
ngOnInit():void{
  this.ShowGrid()
  // this.srv.GetAllUsers()
  // .subscribe({
  //   next:(data)=>{
  //     this.userdataNew=data;
  //   }
  // });
 // this.userdata=this.srv.GetAllUsers();
}
private ShowGrid()
{
  this.srv.GetAllUsers()
  .subscribe({
    next:(data)=>{
      this.userdataNew=data;
}
  });
}
deleteuser(id:any){
  this.srv.deleteuser(id).subscribe(
    {
      next:(_)=>{
        this.ShowGrid();

      }
    }
  )
}
GotoAdduser(){
this.router.navigate(['adduser']);
}
EditUser(id:any):void{
  this.router.navigate([`EditUser/${id}`]);
}
}
