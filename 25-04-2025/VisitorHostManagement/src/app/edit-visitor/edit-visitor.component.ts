import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { FormControl, FormGroup } from '@angular/forms';
import { VisitorSourceService } from '../visitor-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent {
  currentvisit:VisitorInfo={}
  frm:FormGroup=new FormGroup({
      vname:new FormControl(this.currentvisit.vname),
      vloc:new FormControl(this.currentvisit.vloc),
      hname:new FormControl(this.currentvisit.hname),
      vdate:new FormControl(this.currentvisit.vdate),
    })
    constructor(private srv:VisitorSourceService,private activeRoute:ActivatedRoute,private router:Router){
      this.activeRoute.paramMap.subscribe((prm)=>{
        let VId =prm.get('id')
        if(VId!=null){
          this.srv.GetVisitorDataById(VId).subscribe({
            next:(data)=>{
              this.currentvisit=data
              this.VisitorForm()
            }
          })
        }
      })
    }
    private VisitorForm():void{
      this.frm.controls['vname'].setValue(this.currentvisit.vname)
      this.frm.controls['vloc'].setValue(this.currentvisit.vloc)
      this.frm.controls['hname'].setValue(this.currentvisit.hname)
      this.frm.controls['vdate'].setValue(this.currentvisit.vdate)
    }
    EditVisitor(){
      this.currentvisit.vname=this.frm.controls['vname'].value
      this.currentvisit.vloc=this.frm.controls['vloc'].value
      this.currentvisit.hname=this.frm.controls['hname'].value
      this.currentvisit.vdate=this.frm.controls['vdate'].value
      this.srv.EditVisitor(this.currentvisit).subscribe({
        next:(_)=>{
          this.router.navigate(['Home/VisitorList'])
        }
      })
    }
}
