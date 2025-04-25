import { Component, OnInit } from '@angular/core';
 import { HostInfo, VisitorInfo } from '../visitor-info';
 import { DataSourceService } from '../data-source.service';
 
 @Component({
   selector: 'app-h-visitor-list',
   templateUrl: './hvisitor-list.component.html',
   styleUrls: ['./hvisitor-list.component.css']
 })
 export class HVisitorListComponent implements OnInit{
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