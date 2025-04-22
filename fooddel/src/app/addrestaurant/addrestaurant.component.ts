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
export class AddrestaurantComponent implements OnInit {
  //  rdata:Restaurantinfo=[]; 
   frm:FormGroup=new FormGroup({
  restaurantid:new FormControl(''),
  restaurantname:new FormControl(''),
  rlocation:new FormControl(''),
  restaurantowner:new FormControl(''),
});
ownerlist:Userinfo[]=[];
constructor(private dsdrv:DatasourceService,private router:Router){
  
}
ngOnInit():void{
  this.ownerlist=this.dsdrv.GetAllUsers().filter((r)=>r.role==USERTYPE.OWNER);
  console.log("ownerlist",this.ownerlist);
}
AddNewRestaurant(){
  console.log(this.frm.value);

}
}

