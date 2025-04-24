import { Component, OnInit } from '@angular/core';
import { RestInfo } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfo, UserInfoNew } from '../user-info';
import { UserType } from '../user-type';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent{
ownerList:UserInfoNew[]=[]
form:FormGroup=new FormGroup({
  id:new FormControl(''),
  name:new FormControl(''),
  location:new FormControl(''),
  owner:new FormControl('')
})
constructor(private srv:DataSourceService,private router:Router)//service injection
{

}
AddNewRestaurant()
{
  let restData:RestInfo={
    id:this.form.controls['id'].value,
    name:this.form.controls['name'].value,
    location:this.form.controls['location'].value,
    owner:this.form.controls['owner'].value,
    }
  console.log(restData)
  //this.srv.AddNewRestEntry(restData)
  this.srv.AddNewRestPost(restData).subscribe({
    next:(data)=>{
      this.router.navigate(['RestList'])
    }
  })
  
}
ngOnInit(): void {
  this.srv.GetAllUser().subscribe({
    next:(data)=>{
      this.ownerList=data.filter((r)=>(r.role?.toUpperCase()==UserType.OWNER.toUpperCase()))
    }
  })
  console.log(this.ownerList)
}
GoBackToRestList()
{
  this.router.navigate(['RestList'])
}
}
