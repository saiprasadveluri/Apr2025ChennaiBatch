import { Component } from '@angular/core';
import { HostService } from '../host.service';
 
@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html'
})
export class AddHostComponent {
  host: any = {};
 
  constructor(private hostService: HostService) {}
 
  addnewhost() {
this.hostService.addHost(this.host).subscribe(() => {
      alert('Host added successfully!');
this.host = {};
    });
  }
}
