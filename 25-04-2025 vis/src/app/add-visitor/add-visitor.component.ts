import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorInfo } from '../visitor-info';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent {
 frm:FormGroup=new FormGroup({
 Name:new FormControl(''),
 Parentcompany:new FormControl(''),
 Purpose:new FormControl(''),
 location:new FormControl(''),
 MobileNumber:new FormControl(''),
 VistingDate:new FormControl(''),
 HostName:new FormControl(''),
});
visitordata:VisitorInfo[]=[];
constructor(private srv: DatasourceService,private router:Router) 
{
  
}

AddNewvisitor()
{
      let visitordata:VisitorInfo={
        Name:this.frm.controls['Name'].value,
        Parentcompany:this.frm.controls['Parentcompany'].value,
        Purpose:this.frm.controls['Purpose'].value,
        location:this.frm.controls['location'].value,
        MobileNumber:this.frm.controls['MobileNumber'].value,
        VistingDate:this.frm.controls['VistingDate'].value,
        HostName:this.frm.controls['HostName'].value,
      }
   console.log(visitordata) ;
   this.srv.AddNewvisitor(visitordata).subscribe({
    next:(data)=>
    {
      this.router.navigate(['visitoe-lis'])
    }
  })
}
}
