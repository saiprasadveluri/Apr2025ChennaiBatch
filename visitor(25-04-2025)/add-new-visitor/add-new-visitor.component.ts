import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VistorInfo } from '../vistor-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-visitor',
  templateUrl: './add-new-visitor.component.html',
  styleUrls: ['./add-new-visitor.component.css']
})
export class AddNewVisitorComponent {
  frm:FormGroup=new FormGroup({
    vname:new FormControl(''),
    hostname:new FormControl(''),
    vdate:new FormControl(''),
    vloc:new FormControl('')
})
constructor(private srv:DataSourceService,private router:Router)
{

}
AddNewVistor()
{
  let vistData:VistorInfo={
    vname:this.frm.controls['vname'].value,
    hostname:this.frm.controls['hostname'].value,
    vdate:this.frm.controls['vdate'].value,
    vloc:this.frm.controls['vloc'].value
}
console.log(vistData)
  this.srv.AddNewVistEntry(vistData).subscribe(
  {
    next:(data)=>{
      this.router.navigate(['Home/VistList'])
    }
  }
)
}
GotoVistList()
{
  this.router.navigate(['Home/VistList'])
}
}
