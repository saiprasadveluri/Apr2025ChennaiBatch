import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../host-info';
import { HttpClient } from '@angular/common/http';
import { DatasourceServiceService } from '../datasource-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.css']
})
export class HostlistComponent implements OnInit  {
  hostdata:HostInfo[]=[];
  
    constructor(private  http:HttpClient,private srv:DatasourceServiceService,private router:Router ){
    
    }
    ngOnInit():void{
      
      this.ShowGrid()
  
    }
    private ShowGrid()
    {
      this.srv.GetAllHosts()
      .subscribe({
        next:(data)=>{
          this.hostdata=data;
          // .filter((h)=>h.role=="Host")
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
    GotoHost(){
    this.router.navigate(['home/addhost']);
    }
    // Editvisitor(id:any):void{
    //   this.router.navigate([`editvisitor/${id}`]);
    // }
    }