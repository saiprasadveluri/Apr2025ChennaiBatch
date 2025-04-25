import { Component, EventEmitter, Host, Output } from '@angular/core';
import { HostService } from '../host.service';

@Component({
  selector: 'app-hostform',
  templateUrl: './hostform.component.html',
  styleUrls: ['./hostform.component.css']
})
export class HostformComponent {
@Output() hostAdded=new EventEmitter<Host>();
host:Host={
  hostId: '',
  hostname: '',
  employeeNumber:'',
  department:'',
  location: '',
  phoneNo:'',
  readOnly: false
};
constructor(private hostService:HostService){}
addHost(): void{
  // this.host.hostId=new Date().getTime();
  this.hostService.addHost(this.host).subscribe(newHost =>{
    this.resetForm();
   this.hostAdded.emit(newHost);
  });
}
  resetForm():void {
    this.host={
    hostId: '',
    hostname: '',
    employeeNumber:'',
    department:'',
    location: '',
    phoneNo:'',
    readOnly: false
 
  };
  
  }
}


