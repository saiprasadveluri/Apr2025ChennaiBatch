import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../host-info';
import { VisitorSourceService } from '../visitor-source.service';
import { VisitorInfo } from '../visitor-info';

@Component({
  selector: 'app-host-visitor-list',
  templateUrl: './host-visitor-list.component.html',
  styleUrls: ['./host-visitor-list.component.css']
})
export class HostVisitorListComponent implements OnInit {
 // HostData:HostInfo[]=[];
   VisitorData:VisitorInfo[]=[];

  loggedInUserData:HostInfo|undefined
  constructor(private srv:VisitorSourceService){
    this.srv.GetAllHosts().subscribe({
      next:(data)=>{
        let strUserData:string|null=sessionStorage.getItem('Data');
        if(strUserData!=null){
          this.loggedInUserData=JSON.parse(strUserData)
        }
        else{
          this.loggedInUserData=undefined
        }
      }
    })
  }
  ngOnInit(): void {
    this.srv.GetAllVisitors()
    .subscribe({
      next:(data)=>{ 
        console.log(data);   
        console.log(this.loggedInUserData);       
        if(this.loggedInUserData!=undefined){
          this.VisitorData=data.filter((v)=>{
            return v.hname==this.loggedInUserData?.hname
          })
        }
      } 
    });
    
}
}
