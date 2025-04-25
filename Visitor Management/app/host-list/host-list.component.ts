import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../host-info';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.scss']
})
export class HostListComponent implements OnInit {
  hdata: HostInfo[] = [];
 
  constructor(private vsrv: DatasourceService,private router:Router) { }

  ngOnInit(): void {
    this.vsrv.getHost().subscribe({
      next:(data)=>{
        this.hdata = data;
      }
    });
    // this.userD=this.srv.getAlluser();
  }
  private ShowGrid(){
    this.vsrv.getHost().subscribe({
      next:(data)=>{
        this.hdata = data;
      }
    });
  }
  DeleteHost(id:any) {
    this.vsrv.Deleteho(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
}
