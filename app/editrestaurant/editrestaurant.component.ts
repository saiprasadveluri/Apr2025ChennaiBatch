import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestInfo } from '../rest-info';
import { UserInfoNew } from '../user-info';
import { UserType } from '../user-type';

@Component({
  selector: 'app-editrestaurant',
  templateUrl: './editrestaurant.component.html',
  styleUrls: ['./editrestaurant.component.css']
})
export class EditrestaurantComponent  implements OnInit {
  restData:RestInfo={};
  frm:FormGroup =new FormGroup({
      restId:new FormControl(this.restData.id),
      restName:new FormControl(this.restData.name),
      location:new FormControl(this.restData.location),
      //email:new FormControl("this.currentUser.email"),
      rowner:new FormControl(this.restData.owner)
  });
  
  constructor(private srv:DatasourceService,private activeRoute:ActivatedRoute,private router:Router)
  {
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      console.log(SelId)
      if(SelId!=null)
      {
        this.srv.GetUserDataById(SelId).subscribe(
          {
            next:(data)=>{
              console.log(data)
              this.restData=data;
              this.PrepareForm();
            }
          }
        )
      }

    })
    // this.srv.GetUserDataById()
  }
  ownerList:UserInfoNew[]=[]
  private PrepareForm():void
  {
    this.frm.controls['restId'].setValue(this.restData.id);
    this.frm.controls['restName'].setValue(this.restData.name);
    this.frm.controls['location'].setValue(this.restData.location);
    this.frm.controls['rowner'].setValue(this.restData.owner);
  }

  ngOnInit():void{
  this.srv.GetAllUsers().subscribe({
    next:(data)=>{
      this.ownerList= data.filter((r)=>r.role==UserType.Owner)
    }
  })
}

  EditRestaurant()
  {
    this.restData.id=this.frm.controls["id"].value;
    this.restData.name=this.frm.controls["name"].value;
    this.restData.location=this.frm.controls["location"].value;
  
    this.restData.owner=this.frm.controls["owner"].value;
    this.srv.EditUser(this.restData).subscribe({
      next:(_)=>{
        this.router.navigate(['Home/Admin/ViewRestaurant']);
      }
    })
  }

}

