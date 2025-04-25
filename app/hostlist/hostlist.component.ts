import { Component, Host, OnInit } from '@angular/core';
import { HostService } from '../host.service';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.css']
})
export class HostlistComponent implements OnInit {
hosts:Host[]=[];
constructor(private hostService:HostService){}
  ngOnInit(): void {
    this.loadHosts();
  }
  loadHosts():void{
   this.hostService.getHosts().subscribe((data: Host[])=>{
    this.hosts=data;
   });
  }
  
}
