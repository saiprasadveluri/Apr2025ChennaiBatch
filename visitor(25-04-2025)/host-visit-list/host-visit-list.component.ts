import { Component, Host, OnInit } from '@angular/core';
import { VisitorListComponent } from '../visitor-list/visitor-list.component';
import { HostInfo } from '../host-info';
import { VisitorSourceService } from '../visitor-source.service';
import { VisitInfo } from '../visit-info';

@Component({
  selector: 'app-host-visit-list',
  templateUrl: './host-visit-list.component.html',
  styleUrls: ['./host-visit-list.component.css']
})
export class HostVisitListComponent implements OnInit{
  visitData:VisitInfo[]=[]
  loggedInUserData:HostInfo|undefined
constructor(private srv:VisitorSourceService)
{
  //get the login rest from browser
  this.srv.GetAllHostData().subscribe({
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
    this.srv.GetAllVisitData().subscribe({
      next:(data)=>{
        console.log(data)
        console.log(this.loggedInUserData)
        if(this.loggedInUserData!=undefined)
        {
          this.visitData=data.filter((v)=>{
            return v.hostname==this.loggedInUserData?.hname
          })
        }
      }
    })
  }
}
