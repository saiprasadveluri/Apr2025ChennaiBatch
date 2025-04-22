import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
import { userType } from './UserTypeEnum';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent {

  frm:FormGroup=new FormGroup({
    rid:new FormControl(' '),
    rname:new FormControl(' '),
    rlocation:new FormControl(' '),
    rowner:new FormControl(' '),

  });
  ownerList:UserInfo[]=[];
constructor(private dSrv:DataSourceService,private router:Router){

}

ngOnInit(): void{
  this.ownerList=this.dSrv.GetAllUser().filter((r)=>r.role==userType.OWNER);
}
OnAddNewRestaurent(){

}
}
