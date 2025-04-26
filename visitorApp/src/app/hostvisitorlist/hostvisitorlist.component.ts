import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';
import { VisitorInfo } from '../visitor-info';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-hostvisitorlist',
  templateUrl: './hostvisitorlist.component.html',
  styleUrls: ['./hostvisitorlist.component.css']
})
export class HostvisitorlistComponent implements OnInit {
visitor:VisitorInfo[]=[];
loggedInUser:HostInfo|undefined

  constructor(private  http:HttpClient,private srv:DatasourceService,private router:Router ){
    this.srv.GetAllhost().subscribe({
      next:()=>{
     let strUserdata:string|null=sessionStorage.getItem('Userdata');
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

    this.srv.GetAllvisitors()
      .subscribe({
      next:(data)=>{
        console.log(data);
        console.log(this.loggedInUser);
        if(this.loggedInUser!=undefined){
          this.visitor=data.filter((v)=>{
            return v.Name==this.loggedInUser?.Name
        });
      }
      }
    })
  }
}

  