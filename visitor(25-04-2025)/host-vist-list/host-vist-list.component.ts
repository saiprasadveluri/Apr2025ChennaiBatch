import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { HostInfo } from '../host-info';
import { VistorInfo } from '../vistor-info';

@Component({
  selector: 'app-host-vist-list',
  templateUrl: './host-vist-list.component.html',
  styleUrls: ['./host-vist-list.component.css']
})
export class HostVistListComponent implements OnInit{
  vistData:VistorInfo[]=[]
  loggedInUserData:HostInfo|undefined
constructor(private srv:DataSourceService) 
{
  this.srv.GetHostData().subscribe({
    next:(data)=>{
      let strUserData:string|null=sessionStorage.getItem('Data')
      if(strUserData!=null)
      {
        this.loggedInUserData=JSON.parse(strUserData)
      }
      else
      {
        this.loggedInUserData=undefined
      }
      }
  })
  
  
}
  ngOnInit(): void {
    this.srv.GetHostData().subscribe({
      next:(data)=>{
      if(this.loggedInUserData!=undefined)
      {
        this.vistData=data.filter((elm)=>{
          return elm.hname==this.loggedInUserData?.hname
        }
        )
      }
      }
    })
  }
}
