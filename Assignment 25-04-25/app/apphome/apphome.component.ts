import { Component } from '@angular/core';
import { HostInfo } from '../host-info';
import { Router } from '@angular/router';
import { DatasourceServiceService } from '../datasource-service.service';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent {
  userEmail:string='';
  userPassword:string=''
  constructor(private router:Router,private srv:DatasourceServiceService){

  }

  Login(){
    this.srv.GetAllHosts().subscribe((data)=>{
      let loggedInUser:HostInfo|undefined=data.find((elm)=>{
        return elm.Email==this.userEmail && elm.Password==this.userPassword;
      })
      if(loggedInUser!=undefined)
      {
        sessionStorage.setItem('Userdata',JSON.stringify(loggedInUser));
        let userRole=loggedInUser.role;
        if(userRole=="Host"){
          this.router.navigate(['hosthome'])
        }
        else if(userRole=="Manager"){
          this.router.navigate(['home'])
        }
      }
    })
  

  }
}

