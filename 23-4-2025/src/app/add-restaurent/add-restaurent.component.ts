import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInfo } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Route, Router } from '@angular/router';
import { RestInfo, RestInfoNew } from '../rest-info';
import { RestaurentListComponent } from '../restaurent-list/restaurent-list.component';
import { RDataSourceService } from '../rdata-source.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent {
  frm1:FormGroup=new FormGroup({
    rid:new FormControl(''),
    rName:new FormControl(''),
    rLoc:new FormControl(''),
    role:new FormControl('')
  });
  constructor(private dSrv:RDataSourceService,private router:Router){

  }
 AddNewRestaurent(){
    let restaurentData:RestInfoNew={
      id:this.frm1.controls['rid'].value,
      name:this.frm1.controls['rName'].value,
      location:this.frm1.controls['rLoc'].value,
      owner:this.frm1.controls['role'].value
    };
    console.log(restaurentData);
    this.dSrv.AddRestEntry(restaurentData).subscribe({
      next:(data)=>{
        this.router.navigate(['RestaurentList'])
      }
    });
  }
}
//done-------
//done
