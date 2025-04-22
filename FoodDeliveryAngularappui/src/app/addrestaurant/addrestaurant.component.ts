import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Userinfo } from '../userinfo';
import { DataSourseService } from '../data-sourse.service';
import { Router } from '@angular/router';
import { UserType } from './UserTypeEnum';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {
  frm:FormGroup=new FormGroup({
    restaurantid:new FormControl(''),
    restaurantName:new FormControl(''),
    restaurantLocation:new FormControl(''),
    restaurantowner:new FormControl(''),

  });
  ownerList:Userinfo[]=[];
  constructor(private dSrv:DataSourseService,private router:Router)
  {

  }
  ngOnInit():void{
    this.ownerList=this.dSrv.GetAllUsers().filter((r)=>r.role==UserType.Owner);
  }
  OnAddNewRestaurant()
  {

  }

}
