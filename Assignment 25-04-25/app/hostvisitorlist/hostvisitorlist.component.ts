import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HttpClient } from '@angular/common/http';
import { DatasourceServiceService } from '../datasource-service.service';
import { Router } from '@angular/router';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-hostvisitorlist',
  templateUrl: './hostvisitorlist.component.html',
  styleUrls: ['./hostvisitorlist.component.css']
})
export class HostvisitorlistComponent implements OnInit {
  visitor:VisitorInfo[]=[];
  loggedInUser:HostInfo|undefined
    constructor(private  http:HttpClient,private srv:DatasourceServiceService,private router:Router ){
      this.srv.GetAllHosts().subscribe({
        next:(data)=>{
          let strUserdata=sessionStorage.getItem('Userdata');
          console.log(strUserdata)
          if(strUserdata!=null)
          {
            this.loggedInUser=JSON.parse(strUserdata)
          }
          else{
            this.loggedInUser=undefined
          }
        }
      })
    
    }
    ngOnInit():void{
      this.srv.GetAllVisitors().subscribe({
        next:(data)=>{
          console.log(data);
          console.log(this.loggedInUser); 
          if(this.loggedInUser!=undefined){
            this.visitor=data.filter((v)=>{
              return v.hname==this.loggedInUser?.hname
            });
          }
    }
    })
  }
}


  
  
