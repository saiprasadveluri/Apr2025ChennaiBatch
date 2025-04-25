import { Component } from '@angular/core';
import { HostInfoNew } from '../host-info';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent {
  hostData:HostInfoNew[]=[];
  constructor(private http:HttpClient,private rSrv:DataSourceService, private router:Router){

  }
  ngOnInit(): void {
    this.rSrv.GetAllHosts().subscribe({
      next:(data)=>{
        this.hostData=data;
      }
    });
  }
  private ShowGrid(){
    this.rSrv.GetAllHosts().subscribe({
      next:(data)=>{
        this.hostData=data;
      }
    });
  }
  DeleteHost(id:any){
    this.rSrv.DeleteHost(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
  GotoAddHost(){
    this.router.navigate(['AddHost']);
  }
  EditHost(id:any){
    this.router.navigate([`EditHost/${id}`])
  }

}
