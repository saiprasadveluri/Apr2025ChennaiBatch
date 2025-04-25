import { Component } from '@angular/core';
import { VDataSourceService } from '../vdata-source.service';
import { Router } from '@angular/router';
import { Hostinfo } from '../vinfo';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent {
  email:string="";
  password:string="";
  constructor(private srv:VDataSourceService,private router:Router){

  }
  Login(){
   this.srv.GetAllHosts().subscribe((data)=>{
    let loggedInHost:Hostinfo|undefined=data.find((elm)=>{
      return elm.email==this.email && elm.password==this.password;
    });
    if(loggedInHost!=undefined){
      sessionStorage.setItem('hostData',JSON.stringify(loggedInHost));
      let hostRole=loggedInHost.role;
      if(hostRole=="manager")
      {
        this.router.navigate(['home']);
      }
      else {
        this.router.navigate(['hosthome/hostdashboard']);
      }
    }
   })
  }

}
