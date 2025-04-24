import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { UserInfoNew } from '../user-info';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent {
  usEmail: string="";
  usPwd:string="";
  constructor(private router:Router,private srv:DataSourceService){}
  Login()
  {
this.srv.getAlluser().subscribe((d) =>{
  let logged:UserInfoNew|undefined = d.find((elm)=>{
    return elm.email==this.usEmail && elm.password==this.usPwd;
  });
  if(logged != undefined){
    sessionStorage.setItem('UserData',JSON.stringify(logged));
    
    let usrole = logged.role;
    if(usrole=="Admin"){
      this.router.navigate(['home']);
    }
    else if(usrole=="Owner"){
      this.router.navigate(['ownerhome']);
    }
  }
})
  }
}
