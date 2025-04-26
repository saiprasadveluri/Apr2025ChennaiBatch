import { Component, OnInit } from '@angular/core';
import { hostInfo } from '../user-info';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit{
  hostData:hostInfo[]=[];
  constructor(private http:HttpClient, private srv:DataSourceService, private router: Router)
  {

  }
  GotoAddHosts()
  {
    this.router.navigate(['home/AddHost']);
  }
  ngOnInit(): void {
      this.ShowGrid()
      this.srv.GetAllHosts().subscribe({
        next:(data)=>{
          this.hostData=data;
        }
      })
  }

  private ShowGrid()
  {
    this.srv.GetAllHosts().subscribe({
      next: (data) => {
        this.hostData = data;
      }
    })
  }

  DeleteHost(id:any)
  {
    this.srv.DeleteHost(id).subscribe(
      {
        next: (_) => {
          this.ShowGrid();
        }
      }
    )
  }

  GotoAddHost() {
    this.router.navigate(['home/AddHost']);
  }

  EditHost(id:any)
  {
    this.router.navigate([`home/EditHost/'${id}`]);
  }
}
