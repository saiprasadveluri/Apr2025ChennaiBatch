import { Component, OnInit } from '@angular/core';
import { Hostinfo } from '../vinfo';
import { VDataSourceService } from '../vdata-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.css']
})
export class HostlistComponent implements OnInit{
  hostData:Hostinfo[]=[];
  constructor(private srv:VDataSourceService,private router:Router){

  }
  private ShowGrid(){
    this.srv.GetAllHosts().subscribe({
      next:(data=>{
        this.hostData=data;
      })
    });
  }
  ngOnInit(): void {
    this.ShowGrid()
  }
  GotoAddHost(){
this.router.navigate(['home/addhost']);
  }
  EditHost(id:any):void{
    this.router.navigate([`home/edithost/${id}`]);
  }
  DeleteHost(id:any){
    this.srv.DeleteHost(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
}
