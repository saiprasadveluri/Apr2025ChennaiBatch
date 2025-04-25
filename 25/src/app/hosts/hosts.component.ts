import { Component, OnInit } from '@angular/core';
import { HostService } from '../host.service';
import { Host } from '../host';
@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit{

  hosts:Host[] = [];
  host: Partial<Host> = {};

  constructor (private hostService:HostService){}

  ngOnInit(): void {
    this.loadHosts();  
  }

  loadHosts(){
    this.hostService.getAllHosts().subscribe(data => this.hosts = data);
  }

  generateId(): string{
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({length:4}, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  }

  addHost(){
    const newHost: Host= {
      id: this.generateId(), ...this.host
    }as Host;
    this.hostService.addHost(newHost).subscribe(()=>{
      this.loadHosts();
      this.host = {};
  });
  }

  

}
