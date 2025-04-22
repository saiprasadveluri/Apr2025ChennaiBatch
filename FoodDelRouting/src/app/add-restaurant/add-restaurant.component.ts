import { Component, OnInit } from '@angular/core';
import { RestInfo } from '../rest-into';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserType } from '../user-type';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit{
  RestData:RestInfo={}
  OwnerList:UserInfo[]=[]
  res:FormGroup =new FormGroup({
  RestId:new FormControl(''),
  RestName:new FormControl(''),
  Location:new FormControl(''),
  Owner:new FormControl(''),
  });
  AddNewRestaurant(){
    let RestData:RestInfo={
          RestId:this.res.controls['RestId'].value,
          RestName:this.res.controls['RestName'].value,
          Location:this.res.controls['Location'].value,
          Owner:this.res.controls['Owner'].value,
        }
  }
  constructor(private dsrv:DataSourceService,private router:Router){//to get the methods from service
  
    }
  ngOnInit(): void {
    this.OwnerList=this.dsrv.GetAllUsers().filter((r)=>r.role==UserType.Owner)
  }
  GoBackToUserList(){
    this.router.navigate(['AddUser'])
  }
}
