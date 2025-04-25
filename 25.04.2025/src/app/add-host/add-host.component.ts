import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../vm-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: ['./add-host.component.css']
})
export class AddHostComponent implements OnInit{

  hostdata: HostInfo[] = [];

  
host: HostInfo = {
  id: '',
  name: '',
  employeeNum: '',
  department: '',
  location: '',
  contactNumber: ''
  };
  

  constructor(private hostService: DataSourceService, private router: Router){

  }
  


  ngOnInit(): void {
    this.getHosts();
  }

  getHosts(){

    this.hostService.getHosts().subscribe(data => {
    this.hostdata = data;
    });

  }

  addHost():void{
    this.hostService.addHost(this.host).subscribe(newHost => {
    this.hostdata.push(newHost);
    this.resetForm();
    });

  }

  resetForm():void{
    this.host = {
      id:'',
      name: '',
      employeeNum: '',
      department: '',
      location: '',
      contactNumber: ''
      };

  }

}




  
