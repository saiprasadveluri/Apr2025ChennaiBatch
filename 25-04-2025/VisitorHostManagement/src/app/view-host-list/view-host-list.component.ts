import { Component } from '@angular/core';
import { HostInfo } from '../host-info';
import { VisitorSourceService } from '../visitor-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-host-list',
  templateUrl: './view-host-list.component.html',
  styleUrls: ['./view-host-list.component.css']
})
export class ViewHostListComponent {
  HostData:HostInfo[]=[];
  constructor(private srv:VisitorSourceService, private router:Router){

  }
  ngOnInit(): void {
    this.ShowGrid()
    } 
    private ShowGrid(){
    this.srv.GetAllHosts()
    .subscribe({
      next:(data)=>{
        this.HostData=data.filter((h)=>h.role=="Host")
      }
    });
  }
  DeleteHost(id:any){
    this.srv.DeleteHost(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
  GotoAddHost(){
    this.router.navigate(['Home/AddHost'])
  }
}
