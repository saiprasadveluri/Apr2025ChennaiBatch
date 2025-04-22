import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInfo } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserType } from './UserTypeEnum';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit{

frm:FormGroup=new FormGroup({
  rid:new FormControl(''),
  rname:new FormControl(''),
  rlocation:new FormControl(''),
  rowner:new FormControl('')
});
ownerList:UserInfo[]=[];
constructor(private dSrv:DataSourceService, privaterouter:Router)
{

}
ngOnInit(): void {
  this.ownerList = this.dSrv.GetAllUsers().filter((r)=>r.role==UserType.OWNER);
}


OnAddNewRestaurant()
{

}
}
