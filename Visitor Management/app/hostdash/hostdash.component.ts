import { Component } from '@angular/core';
import { HostInfo } from '../host-info';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';
import { VisitorInfo } from '../visitor-info';

@Component({
  selector: 'app-hostdash',
  templateUrl: './hostdash.component.html',
  styleUrls: ['./hostdash.component.scss']
})
export class HostdashComponent {
  hostd:VisitorInfo[] =[]
  // d:HostInfo[] = []
  logged:VisitorInfo|undefined;
  constructor(private srv:DatasourceService,private router:Router){
    let srve:string|null=sessionStorage.getItem('UserData');
     if(srve!=null){
      this.logged=JSON.parse(srve);
     }
     else{
      this.logged=undefined;
     }
     console.log(this.logged)
  }
  ngOnInit(){
    this.srv.getVisit().subscribe({
      next:(d)=>{
        if(this.logged!=undefined){
        this.hostd = d.filter((elm)=>{
          return elm.hostrole == this.logged?.hostrole;
        });
      }
      }
    })
  }
  }

