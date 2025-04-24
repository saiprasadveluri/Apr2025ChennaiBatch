import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { UserInfoNew } from '../user-info';
import { RestInfoNew } from '../rest-info';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-owner-restaurant-list',
  templateUrl: './owner-restaurant-list.component.html',
  styleUrls: ['./owner-restaurant-list.component.css']
})
export class OwnerRestaurantListComponent implements OnInit{
  RestDataNew:RestInfoNew[]=[];
  loggedInUserData:UserInfoNew|undefined;
  constructor(private srv:DataSourceService,private router:Router){
    //Get the loggedin Data from Browser Storage
    let strUserData:string|null=sessionStorage.getItem('UserData')
    if(strUserData!=null){
      this.loggedInUserData=JSON.parse(strUserData);
    }
    else{
      this.loggedInUserData=undefined;
    }
  }
  ngOnInit():void{
    this.srv.GetAllRestaurant().subscribe({
      next:(data)=>{
        if(this.loggedInUserData!=undefined){
          this.RestDataNew=data.filter((elm)=>{
            return elm.owner==this.loggedInUserData?.id;
        })
        }
      }
    })
  }
  private ShowGrids(){
    this.srv.GetAllRestaurant()
   .subscribe({next:(Rdata)=>{this.RestDataNew=Rdata;}})
  }
  GotoAddRestaurant() {
    this.router.navigate(['AddRestaurant'])
  }
  DeleteRestaurant(id: any) {
    this.srv.DeleteRestaurant(id).subscribe({
      next:(_)=>{
        this.ShowGrids();
      }
    })
  }
  EditRestaurant(id: any) {
    this.router.navigate([`EditRestaurant/${id}`])
  }
}

