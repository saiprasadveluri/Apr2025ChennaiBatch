import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserInfo } from '../user-info';
import { Router } from '@angular/router';
import { DataSourceService } from '../datasource.service';
import { UserType } from './UserTypeEnum';
import { RestInfoNew } from '../rest-info';
 
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent  implements OnInit {
   
     frm:FormGroup=new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      location:new FormControl(''),
      owner:new FormControl('')
     
     });
     
     
     ownerList:UserInfo[]=[];
     constructor(private dSrv:DataSourceService,private router:Router)
        {
         
     
        }
  ngOnInit(): void {
    // this.ownerList = this.dSrv.GetAllUsers().filter((r)=>r.role==UserType.OWNER);
  }
 
  AddNewRestaurant()
  {
    let RestDataNew:RestInfoNew={
      id:this.frm.controls['id'].value,
      name:this.frm.controls['name'].value,
      location:this.frm.controls['location'].value,
      owner:this.frm.controls['owner'].value,
    }
    console.log(RestDataNew);
    this.dSrv.AddNewRestaurantEntry(RestDataNew).subscribe({next:(data)=>{
      this.router.navigate(['RestaurantList'])
    }}
    )
  }
     
}