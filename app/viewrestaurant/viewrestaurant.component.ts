import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';
import { RestInfo } from '../rest-info';

@Component({
  selector: 'app-viewrestaurant',
  templateUrl: './viewrestaurant.component.html',
  styleUrls: ['./viewrestaurant.component.css']
})
export class ViewrestaurantComponent implements OnInit {

  restData:RestInfo[]=[];
  constructor(private srv:DatasourceService,private router:Router)
  {

  }
  ngOnInit(): void {
    this.ShowGrid()
    
      }
  
  private ShowGrid()
  {
    this.srv.GetAllRest()
    //this.userData=this.srv.GetAllUsers();
   // this.http.get<UserInfoNew[]>("http://localhost:3004/userInfo")
    .subscribe({
      next:(data)=>{
        this.restData=data;
      }
    }
      )};

   GotoAddRest()
  {
    this.router.navigate(["home/AddRestaurant"])
  }
  EditRestaurant(id:any):void
  {
    this.router.navigate([`home/EditRest/${id}`]);
  }

  DeleteRestaurant(id:any)
  {
    this.srv.DeleteRestaurant(id).subscribe(
      {
        next:(_)=>{
          this.ShowGrid();

        }
      });
  }
}