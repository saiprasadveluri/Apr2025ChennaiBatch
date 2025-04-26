import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HostInfo } from '../host-info';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit{
hostData:HostInfo[]=[]
constructor(private http:HttpClient,private srv:DataSourceService,private router:Router) 
{
  
}
GotoAddHost()
{
  this.router.navigate(['AddHost'])
}
ngOnInit():void
{
  this.srv.GetHostData()
  .subscribe({
    next:(data)=>{
      this.hostData=data.filter((h)=>h.role=="Host")
    }
  })
}
private ShowGrid()
{
  this.srv.GetHostData()
  .subscribe({
    next:(data)=>{
      this.hostData=data
    }
  })
}
DeleteHost(id:any)
{
  this.srv.DeleteHost(id).subscribe(
    {
      next:(_)=>{
        this.ShowGrid()
      }
    }
  )
}
EditHost(id:any):void
{
  this.router.navigate([`EditVist/${id}`])
}
}

