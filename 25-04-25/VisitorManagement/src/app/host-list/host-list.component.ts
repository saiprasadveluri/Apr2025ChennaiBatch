import { Component, OnInit } from '@angular/core';
import { Host } from '../host';
import { HttpClient } from '@angular/common/http';
import { HostService } from '../host.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit{
  hosts:Host[]=[];
  constructor(private http:HttpClient, private hostSrv:HostService ,private router:Router){

  }
  ngOnInit(): void {
    this.hostSrv.getHost().subscribe({
      next:(data)=>{
        this.hosts = data;
      }
    })
    
  }


}
