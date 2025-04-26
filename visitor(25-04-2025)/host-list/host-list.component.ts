import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../host-info';
import { VisitorSourceService } from '../visitor-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit{
  hostList:HostInfo[]=[]
  constructor(private srv:VisitorSourceService,private router:Router,private http:HttpClient)
  {

  }
  ngOnInit(): void {
    this.ShowData()
  }
  private ShowData()
  {
    this.srv.GetAllHostData().subscribe({
      next:(data)=>{
        this.hostList=data.filter((h)=>h.role=="Host")
      }
    })
  }
  DeleteHost(id:any)
  {
    this.srv.DeleteHost(id).subscribe({
      next:(_)=>{
        this.ShowData()
      }
    })
  }
  GoBacktoAddHost()
  {
    this.router.navigate(['AddHost'])
  }
  // EditHost(id:any)
  // {
  //   this.router.navigate([`EditHost/${id}`])
  // }
}
