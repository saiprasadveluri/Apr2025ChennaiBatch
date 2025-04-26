import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../host-info';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit{
HostData:HostInfo[]=[];
  constructor(private http:HttpClient,private srv:DataSourceService,private router:Router)
  {
  
  }
  ngOnInit():void{
    this.showGrid()
  }
  private showGrid()
  {
    this.srv.GetAllHost ()
     .subscribe({
      next:(data)=>{
        this.HostData//=data.filter((h)=>h.role=="Host");
      }
       
     })
  }
  DeleteHost(id:any)
  {
    this.srv.DeleteHost(id).subscribe(
      {
        next:(_)=>{
          this.showGrid();
        }
      }
    )
  }
  GotoAddHost()
  {
   this.router.navigate(['AddHost']);
  }

}
