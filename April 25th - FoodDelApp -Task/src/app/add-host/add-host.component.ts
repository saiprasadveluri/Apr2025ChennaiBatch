import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HostInfoNew } from '../host-info';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent {
  frm:FormGroup=new FormGroup({
    name:new FormControl(''),
    employeeNumber:new FormControl('1'),
    department:new FormControl(''),
    location:new FormControl('HYD'),
    contactNumber:new FormControl('')
  });

  constructor(private srv:DataSourceService, private router:Router){
  }

    AddNewHost()
    {
      let hostData:HostInfoNew={
        name:this.frm.controls['name'].value,
        employeeNumber:this.frm.controls['employeeNumber'].value,
        department:this.frm.controls['department'].value,
        location:this.frm.controls['location'].value,
        contactNumber:this.frm.controls['mobileNumber'].value,
      }
      console.log(hostData);
      this.srv.AddNewHostEntries(hostData).subscribe({
        next:(data)=>{
          this.router.navigate(['HostList']);
        }
      });

}
}

