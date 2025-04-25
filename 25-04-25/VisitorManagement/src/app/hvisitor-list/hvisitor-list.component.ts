import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HostInfo } from '../host-info';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-hvisitor-list',
  templateUrl: './hvisitor-list.component.html',
  styleUrls: ['./hvisitor-list.component.css']
})
export class HvisitorListComponent {
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
            return elm.hostname==this.loggedInHostData?.name;
          })

        }
      }
    })
    
  }

}
