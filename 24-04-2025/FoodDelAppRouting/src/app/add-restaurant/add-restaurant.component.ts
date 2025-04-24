import { Component, OnInit } from '@angular/core';
import { RestInfo } from '../rest-into';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserType } from '../user-type';
import { UserInfo, UserInfoNew } from '../user-info';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit{
  //RestData:RestInfo={}
  OwnerList:UserInfoNew[]=[]
  res:FormGroup =new FormGroup({
  //id:new FormControl(''),
  name:new FormControl(''),
  location:new FormControl(''),
  owner:new FormControl(''),
  });
  AddNewRestaurant(){
    let RestData:RestInfo={
          //id:this.res.controls['id'].value,
          name:this.res.controls['name'].value,
          location:this.res.controls['location'].value,
          owner:this.res.controls['owner'].value,
        }
        console.log(RestData)
  this.dsrv.AddNewRestEntry(RestData).subscribe(
    {
    next:(data)=>{
      this.router.navigate(['Home/ViewRestaurant'])
    }
  }
  )
  
}
  constructor(private dsrv:DataSourceService,private router:Router){//to get the methods from service
  
    }
  ngOnInit(): void {
    
    this.dsrv.GetAllUsers().subscribe({
      next:(data)=>{
         this.OwnerList= data.filter((i)=>(i.role==UserType.Owner))
      }
    });  
    console.log(this.OwnerList)  
  }
  
  GotoViewRestaurant(){
    this.router.navigate(['Home/ViewRestaurant'])
 }
}
