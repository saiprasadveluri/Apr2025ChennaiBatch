import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Visitor } from '../visitor'; 
import { Router } from '@angular/router';
import { HostService } from '../host.service';
import { Host } from '../host';
 
@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html'
})
export class AddVisitorComponent implements OnInit {
  visitor: Visitor = {
    id: '',
    name: '',
    location: '',
    parentCompany: '',
    purpose: '',
    contactNumber: '',
    dov: '',
    hostName: ''
  };
 
  hosts: Host[] = [];
 
  constructor(private visitorService: VisitorService, private hostService: HostService, private router: Router) {}
 
  ngOnInit() {
    this.hostService.getHost().subscribe(data => {
      this.hosts = data;
    });
  }
 
  addVisitor() {
    this.visitorService.addVisitor(this.visitor).subscribe(() => {
      alert('Visitor added successfully');
      this.router.navigate(['/visitors']);
    });
  }
}