import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestInfo, RestInfoNew } from '../rest-info';
import { FormControl, FormGroup } from '@angular/forms';
import { RDataSourceService } from '../rdata-source.service';

@Component({
  selector: 'app-editrest',
  templateUrl: './editrest.component.html',
  styleUrls: ['./editrest.component.css']
})
export class EditrestComponent implements OnInit {
currentRest:RestInfoNew={
  }
   frm:FormGroup=new FormGroup({
      // userId:new FormControl(''),
      // id:new FormControl(''),
      rName:new FormControl(this.currentRest.name),
      rLoc:new FormControl(this.currentRest.location),
      role:new FormControl(this.currentRest.owner),
      
      
    });
   EditRest()
   {
    this.currentRest.name=this.frm.controls['rName'].value;
    this.currentRest.location=this.frm.controls['rLoc'].value;
    this.currentRest.owner=this.frm.controls['role'].value;
    this.srv.EditRest(this.currentRest).subscribe(
      {
        next:(_)=>{
          this.router.navigate(['home/RestaurentList'])
        }
      }
    )
    
   }
   constructor(private srv:RDataSourceService, private activeRoute:ActivatedRoute,private router:Router){
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetRestDataId(SelId).subscribe(
          {
            next:(data)=>{
              this.currentRest=data;
              this.PrepareForm1();
            }
          }
        )
      }
    }) 
   }
   private PrepareForm1(): void 
   {
    this.frm.controls['rName'].setValue(this.currentRest.name);
    this.frm.controls['rLoc'].setValue(this.currentRest.location);
    this.frm.controls['role'].setValue(this.currentRest.owner);
   }


   ngOnInit(): void {
     
   }
}
