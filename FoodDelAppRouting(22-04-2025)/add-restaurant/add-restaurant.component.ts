import { Component, OnInit } from '@angular/core';
import { RestInfo } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfo } from '../user-info';
import { UserType } from '../user-type';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit{
restData:RestInfo={}
ownerList:UserInfo[]=[]
form:FormGroup=new FormGroup({
  restId:new FormControl(''),
  restName:new FormControl(''),
  restLoc:new FormControl(''),
  ownerName:new FormControl('')
})
AddNewRestaurant()
{
  let restData:RestInfo={
    restId:this.form.controls['restId'].value,
    restName:this.form.controls['restName'].value,
    restLoc:this.form.controls['restLoc'].value,
    ownerName:this.form.controls['ownerName'].value,
    }
  console.log(restData)
}
constructor(private srv:DataSourceService,private router:Router)//service injection
{

}
ngOnInit(): void {
  this.ownerList=this.srv.GetAllUser().filter((r)=>(r.role==UserType.OWNER))
  console.log(this.ownerList)
}
GoBackToUserList()
{
  this.router.navigate(['UserList'])
}
}
