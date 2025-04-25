import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../host-info';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {
   hostData:HostInfo[]=[];
   GotoAddUser(){

   }
constructor(private http:HttpClient, private srv:DataSourceService,private router:Router){}
  ngOnInit(): void {
    this.srv.GetAllHosts().subscribe({
      next: (data) => {
        this.hostData = data;
      }
    });
  }
  private ShowGrid(){
    this.srv.GetAllHosts().subscribe({
      next:(data)=>{
        this.hostData=data;
      }
    });

  }
  DeleteHost(id:any){this.srv.DeleteHost(id).subscribe(
    {
      next:(_)=>{this.ShowGrid();

      }
    }
  )

  }
  EditHost(id:any):void{
    this.router.navigate([`Home/EditHost/${id}`]);
  }
  GotoAddHost(){
    this.router.navigate(['Home/AddHost']);
  }
}
