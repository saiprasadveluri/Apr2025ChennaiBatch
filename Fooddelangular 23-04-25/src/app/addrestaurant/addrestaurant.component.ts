import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Restaurantinfo } from '../restaurantinfo';
import { Userinfo } from '../userinfo';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';
import { USERTYPE } from './UserTypeEnum';


@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent  {
  //  rdata:Restaurantinfo=[]; 
   frm:FormGroup=new FormGroup({
  id:new FormControl(''),
 name:new FormControl(''),
  location:new FormControl(''),
  owner:new FormControl(''),
});
ownerlist:Userinfo[]=[];
constructor(private srv:DatasourceService,private router:Router){
  
}

AddNewRestaurant(){
   let restdata:Restaurantinfo ={
    id:this.frm.controls['id'].value,
    name:this.frm.controls['name'].value,
    location:this.frm.controls['location'].value,
    owner:this.frm.controls['owner'].value,
       
      }
      console.log(restdata);
      this.srv.AddNewRestaurant(restdata).subscribe({
        next:(_)=>{
          this.router.navigate(['RestaurantList']);
        }
      })
      

      // this.dsdrv. AddNewRestaurant(restdata).subscribe(
      //   {
      //     next:(data:any)=>{
      //       this.router.navigate(['RestaurantList']);
      //     }
      //   }
      // );
     
    }
  
  }
  

