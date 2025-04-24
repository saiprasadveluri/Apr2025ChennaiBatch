import { Component } from '@angular/core';
import { RestInfo } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';
import { UserInfo, UserInfoNew } from '../user-info';
import { UserType } from '../user-type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  frm:FormGroup =new FormGroup({
    id:new FormControl(""),
    name:new FormControl(""),
    location:new FormControl(""),
    owner:new FormControl("")
  });


  ownerList:UserInfoNew[]=[]
  constructor(private srv:DatasourceService,private router:Router)//
  {

  }
  ngOnInit():void{
this.srv.GetAllUsers().subscribe({
  next:(data)=>{
    this.ownerList= data.filter((r)=>r.role==UserType.Owner)
  }
})
}


  AddNewRestaurant(){
    let restData:RestInfo={
      //id:this.frm.controls['id'].value,
      name:this.frm.controls['name'].value,
      location:this.frm.controls['location'].value,
      owner:this.frm.controls['owner'].value
    }
    console.log(restData);
    this.srv.AddNewRestEntry(restData).subscribe(
      {
        next:(data)=>{
          this.router.navigate(["ViewRestaurant"]);
        }
      }
    );
  }

}
