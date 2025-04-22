import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestInfo } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
import { UserListComponent } from '../user-list/user-list.component';
import { OwnerInfo } from '../restaurant-list/UserTypeEnum';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit{
RestData:RestInfo={};
  frm:FormGroup=new FormGroup({
    restName:new FormControl(''),
    restLoc:new FormControl(''),
    rowner:new FormControl(1),
  });
  ownerList:UserInfo[]=[];
  constructor(private dsrv:DataSourceService,private router:Router){}
    ngOnInit(): void {
      this.ownerList=this.dsrv.GetAllUsers().filter((r)=> r.role==OwnerInfo.OWNER);
        }
  AddNewRestaurant(){
    let RestData:RestInfo={
      restName:this.frm.controls['restName'].value,
      restLoc:this.frm.controls['restLoc'].value,
      owner:this.frm.controls['rowner'].value,
    }
    console.log(RestData);
    this.dsrv.AddNewRestaurantEntry(RestData);
    this.router.navigate(['RestaurantList'])
  }

}
