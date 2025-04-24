import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { UserInfo, USerInfoNew } from '../user-info';
import { UserType } from './UserTypeEnum';
import { RestaurantInfo } from '../restaurant-info';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent{
frm:FormGroup=new FormGroup({
 id:new FormControl('') ,
 name:new FormControl('') ,
 location:new FormControl('') ,
 owner:new FormControl('') ,
});
ownerList:USerInfoNew[]=[];
constructor(private srv:DataSourceService,private router:Router)
{

}
//  ngOnInit():void{
//   this.ownerList=this.dSrv.GetAllUsers().filter((r)=>r.role==UserType.OWNER);
// }
AddNewRestaurant()
{
   let restData:RestaurantInfo={
     id:this.frm.controls['id'].value,
     name:this.frm.controls['name'].value,
     location:this.frm.controls['location'].value,
     owner:this.frm.controls['owner'].value,
     
   }
   console.log(restData);
   this.srv.AddNewRestaurant(restData).subscribe(
     {
       next:(_)=>{
         this.router.navigate(['home/RestaurantList'])
       }
     })

}
  ngOnInit():void{
    this.srv.GetAllUsers().subscribe({
      next:(data)=>{
        this.ownerList=data.filter((r)=>(r.role?.toUpperCase()==UserType.OWNER.toUpperCase()))
      }
    })
  }
}
