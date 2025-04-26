import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';
import { VisitorInfo } from '../visitor-info';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.css']
})
export class HostlistComponent {
 hostdata:HostInfo[]=[];
  
  
 
   constructor(private  http:HttpClient,private srv:DatasourceService,private router:Router ){
   
   }
   ngOnInit():void{
   
     this.ShowGrid()
   }
   private ShowGrid()
   {
     this.srv. GetAllhost()
     .subscribe({
       next:(data)=>{
         this.hostdata=data;
       }
     })
   }
   deletehost(id:any){
     this.srv.deletehost(id).subscribe(
       {
         next:(_)=>{
           this.ShowGrid();
   
         }
       }
     )
   }
   GotoAddhost(){
   this.router.navigate(['home/addhost']);
   }
  //  Edithost(id:any):void{
  //    this.router.navigate([`edithost/${id}`]);
  //  }
   }
     
   
 

