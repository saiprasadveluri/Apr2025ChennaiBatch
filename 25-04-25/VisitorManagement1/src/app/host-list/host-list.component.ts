import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../host-info';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit{
  hostData:HostInfo[]=[];
     constructor(private srv:DataSourceService,private http:HttpClientModule, private router:Router){
        
      }
      ngOnInit(): void {
        this.ShowDetails();
      }
      private ShowDetails(){
        this.srv.GetAllHost()
        .subscribe({next:(data)=>{this.hostData=data;}})
      }
      GotoAddHost(){
        this.router.navigate(['Home/AddHost'])
      }
      DeleteHost(id:any){
        this.srv.DeleteHost(id).subscribe({
          next:(_)=>{
            this.ShowDetails();
          }
      })
      }
      EditHost(id:any){
        this.router.navigate([`Home/EditHost/${id}`])
      }
}
