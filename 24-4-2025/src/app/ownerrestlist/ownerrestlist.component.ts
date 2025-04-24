import { Component, OnInit } from '@angular/core';
import { RestInfoNew, UserInfoNew } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { RDataSourceService } from '../rdata-source.service';

@Component({
  selector: 'app-ownerrestlist',
  templateUrl: './ownerrestlist.component.html',
  styleUrls: ['./ownerrestlist.component.css']
})
export class OwnerrestlistComponent implements OnInit {

 restInfoData:RestInfoNew[]=[];
  loggedInUserData:UserInfoNew|undefined;
  constructor(private srv:RDataSourceService){
    let strUserData:string|null=sessionStorage.getItem('userData');
    console.log(strUserData);
    if(strUserData!=null){
      this.loggedInUserData=JSON.parse(strUserData);
    }
    else
    {
      this.loggedInUserData=undefined;
    }
  }
  ngOnInit(): void {
  this.srv.GetAllRest().subscribe({
    next:(data)=>{
      if(this.loggedInUserData!=undefined)
      {
        this.restInfoData=data.filter((elm)=>{
          return elm.owner==this.loggedInUserData?.id;
        })
      }
    }
  })
}
}
