import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestInfo, RestInfoNew } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
import { OwnerInfo } from '../restaurant-list/UserTypeEnum';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit{
  RestDataNew:RestInfoNew={};
  frm:FormGroup=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    location:new FormControl(''),
    owner:new FormControl(1),
  });
  //ownerList:UserInfo[]=[];
  constructor(private dsrv:DataSourceService,private router:Router){}
    ngOnInit(): void {
      //this.ownerList=this.dsrv.GetAllUsers().filter((r)=> r.role==OwnerInfo.OWNER);
        }
  AddNewRestaurant(){
    let RestDataNew:RestInfoNew={
      id:this.frm.controls['id'].value,
      name:this.frm.controls['name'].value,
      location:this.frm.controls['location'].value,
      owner:this.frm.controls['owner'].value,
    }
    console.log(RestDataNew);
    this.dsrv.AddNewRestaurantEntry(RestDataNew).subscribe({next:(data)=>{
      this.router.navigate(['RestaurantList'])
    }}
    )
  };

}