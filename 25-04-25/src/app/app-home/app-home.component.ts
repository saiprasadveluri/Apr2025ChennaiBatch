import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { DataSourceService } from '../data-source.service';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {
  visitorData:VisitorInfo[]=[];
  loggedInHostData:HostInfo|undefined;
  constructor(private srv:DataSourceService){
    let strHostData:string|null=sessionStorage.getItem('HostData');
    if(strHostData!=null){
      this.loggedInHostData=JSON.parse(strHostData);
    }
    else{
      this.loggedInHostData=undefined;
    }
  }
  ngOnInit(): void {
    this.srv.GetAllVisitors().subscribe({
      next:(data)=>{
        if(this.loggedInHostData!=undefined){
          this.visitorData=data.filter((elm)=>{
            return elm.hostName==this.loggedInHostData?.hostName;
          })

        }
      }
    })
    
  }
}
