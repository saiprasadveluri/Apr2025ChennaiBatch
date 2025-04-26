import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HostInfo } from '../host-info';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-visitior-list',
  templateUrl: './host-visitior-list.component.html',
  styleUrls: ['./host-visitior-list.component.css']
})
export class HostVisitiorListComponent {
 Visitor:VisitorInfo[]=[];
 loggedInUser:HostInfo|undefined

 constructor(private http:HttpClient,private srv:DataSourceService,private router:Router)
 {
     this.srv.GetAllHost().subscribe({
      next:(data)=>{
        let StrUserdata:string|null=sessionStorage.getItem('Userdata');
        if(StrUserdata!=null)
        {
          this.loggedInUser=JSON.parse(StrUserdata)
        }
        else{
          this.loggedInUser=undefined
        }
      }
     })
 }
 ngOnInit():void{
  this.srv.GetAllVisitors().subscribe({
    next:(data)=> {
     console.log(data);
     console.log(this.loggedInUser);
     if(this.loggedInUser!=undefined)
     {
      this.Visitor=data.filter((v)=>{
        return v.name==this.loggedInUser?.name
      })
     }
    }
  })
 }
}
