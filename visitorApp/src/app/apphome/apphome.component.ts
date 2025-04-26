import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostInfo } from '../host-info';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent {
  useremail:string='';
  userpassword:string='';
  constructor(private router:Router,private srv:DatasourceService)
  {

  }
  Login()
  {
    this.srv.GetAllhost().subscribe((data)=>{
      
     let loggedInUser:HostInfo|undefined=data.find((elm)=>{
        return elm.email==this.useremail && elm.password==this.userpassword;
      })
      if(loggedInUser!=undefined)
      {
        //store the loggedinuser data
        sessionStorage.setItem('UserData',JSON.stringify(loggedInUser));
        
        let userRole=loggedInUser.role;
        if(userRole=="Host")
        {
          this.router.navigate(['hosthome']);
        }
        else if(userRole=="Manager")
        {
          this.router.navigate(['home']);
        }
      }
    
    })
  }
  


}

