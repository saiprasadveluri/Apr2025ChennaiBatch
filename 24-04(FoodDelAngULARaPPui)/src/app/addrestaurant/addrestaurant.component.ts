import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Restaurantinfo } from '../restaurantinfo';
import { Userinfo, UserinfoNew } from '../userinfo';
import { DataSourseService } from '../data-sourse.service';
import { Router } from '@angular/router';
import { UserType } from '../user-type';



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
  ownerlist:UserinfoNew[]=[];
  constructor(private srv:DataSourseService,private router:Router){
    
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
            this.router.navigate(['home/Restaurantlist'])
          }
        })
      }
      ngOnInit(): void {
        this.srv.GetAllUsers().subscribe({
          next:(data)=>{
            this.ownerlist=data.filter((r)=>(r.role?.toUpperCase()==UserType.OWNER.toUpperCase()))
          }
        })
        console.log(this.ownerlist)
      }
    }


        // this.dsdrv. AddNewRestaurant(restdata).subscribe(
        //   {
        //     next:(data:any)=>{
        //       this.router.navigate(['RestaurantList']);
        //     }
        //   }
        // );
       
      
    
  
    