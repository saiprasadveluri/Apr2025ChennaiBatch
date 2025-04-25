import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../vm-info';
import { VisitorService } from '../visitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {
  visitdata: VisitorInfo[]=[];
  visit:VisitorInfo={

    id:'',
    name:'',
    location:'',
    ParentComp:'',
    Purpose:'',
    MobileNumber:'',
    VisitingDate:'',
    Hostname:''


  };

  constructor(private visitService:VisitorService, private router: Router){

  }
  ngOnInit(): void {
    this.getVisitors();
  }

  getVisitors(){
    this.visitService.getVisitors().subscribe(data => {
    this.visitdata = data;
    });
  }

  addVisit():void{
    this.visitService.addVisitor(this.visit).subscribe(newvisit => {
    this.visitdata.push(newvisit);
    this.resetForm();
    });
    
     }

     resetForm():void{
      this.visit = {
        id:'',
        name:'',
        location:'',
        ParentComp:'',
        Purpose:'',
        MobileNumber:'',
        VisitingDate:'',
        Hostname:''
    
      };


}
}


// host: HostInfo = {
//   id: '',
//   name: '',
//   employeeNum: '',
//   department: '',
//   location: '',
//   contactNumber: ''
//   };
  

//   constructor(private hostService: DataSourceService, private router: Router){

//   }
  


//   ngOnInit(): void {
//     this.getHosts();
//   }

//   getHosts(){

//     this.hostService.getHosts().subscribe(data => {
//     this.hostdata = data;
//     });

//   }

//   addHost():void{
//     this.hostService.addHost(this.host).subscribe(newHost => {
//     this.hostdata.push(newHost);
//     this.resetForm();
//     });

//   }

//   resetForm():void{
//     this.host = {
//       id:'',
//       name: '',
//       employeeNum: '',
//       department: '',
//       location: '',
//       contactNumber: ''
//       };

//   }
