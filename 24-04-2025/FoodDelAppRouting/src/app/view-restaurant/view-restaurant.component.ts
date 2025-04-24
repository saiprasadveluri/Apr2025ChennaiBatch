import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { RestInfo } from '../rest-into';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit{
  RestData:RestInfo[]=[]
  constructor(private dsrv:DataSourceService,private router:Router) {
  
     }
     ngOnInit(): void {
      this.ShowGrid()
  }
    private ShowGrid(){
      this.dsrv.GetAllRests()
    //this.http.get<UserInfoNew[]>('http://localhost:3004/userInfo')
    .subscribe({
      next:(data)=>{
        this.RestData=data;
      }
    });
      //this.http.get<RestInfo[]>('http://localhost:3004/restaurantInfo')
      //this.userData=this.Srv.GetAllUsers();
      //this.http.get<RestInfo[]>('http://localhost:3004/restaurantInfo')
    }
    DeleteRest(id:any){
      this.dsrv.DeleteRest(id).subscribe({
        next:(_)=>{
          this.ShowGrid();
        }
      })
    }
    GotoAddRestaurant(){
      this.router.navigate(['Home/AddRestaurant'])
    }
    EditRest(id:any):void{
      this.router.navigate([`Home/EditRest/${id}`])
    }
}
