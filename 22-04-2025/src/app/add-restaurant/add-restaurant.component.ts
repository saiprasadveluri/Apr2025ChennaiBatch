import { Component } from '@angular/core';
import { RestInfo } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';
import { UserInfo } from '../user-info';
import { UserType } from '../user-type';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restData:RestInfo={};
  frm:FormGroup =new FormGroup({
    restId:new FormControl(""),
    restName:new FormControl(""),
    location:new FormControl(""),
    rowner:new FormControl("")
  });
  ownerList:UserInfo[]=[]
  constructor(private srv:DatasourceService,private router:Router)//
  {

  }
  ngOnInit():void{
    this.ownerList=this.srv.GetAllUsers().filter((r)=>r.role==UserType.Owner)
  }


  AddNewRestaurant(){
    let restData:RestInfo={
      restId:this.frm.controls['restId'].value,
      restName:this.frm.controls['restName'].value,
      location:this.frm.controls['location'].value,
      rowner:this.frm.controls['role'].value
    }
  }
}
 