import { Component, OnInit } from '@angular/core';
import { Hostinfo, Visitorinfo } from '../vinfo';
import { VDataSourceService } from '../vdata-source.service';

@Component({
  selector: 'app-hostvisitorlist',
  templateUrl: './hostvisitorlist.component.html',
  styleUrls: ['./hostvisitorlist.component.css']
})
export class HostvisitorlistComponent implements OnInit{
  visitInfoData:Visitorinfo[]=[];
  loggedInVisitData:Hostinfo|undefined;
  constructor(private srv:VDataSourceService){
    let strVisitorData:string|null=sessionStorage.getItem('hostData');
   
    if(strVisitorData!=null){
      this.loggedInVisitData=JSON.parse(strVisitorData);
    }
    else
    {
      this.loggedInVisitData=undefined;
    }
    console.log(this.loggedInVisitData);
  }
  ngOnInit(): void {
  this.srv.GetAllVisitors().subscribe({

    next:(data)=>{
      console.log(data)
      if(this.loggedInVisitData!=undefined)
      {
        this.visitInfoData=data.filter((elm)=>{
          return elm.hostname==this.loggedInVisitData?.hostname;
        })
      }
    }
  })
}
}
