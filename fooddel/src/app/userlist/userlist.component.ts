import { Component } from '@angular/core';
import { Userinfo } from '../userinfo';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
userdata:Userinfo[]=[];
constructor(private srv:DatasourceService,private router:Router ){

}
ngOnInit():void{
  this.userdata=this.srv.GetAllUsers();
}
GotoAdduser(){
this.router.navigate(['adduser']);
}
}
