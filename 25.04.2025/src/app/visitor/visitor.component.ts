import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../vm-info';

import { Router } from '@angular/router';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  visitdata:VisitorInfo[]=[];
  constructor(private visitorService:VisitorService,private router:Router){

  }
  ngOnInit(): void {

    this.getVisitors();
    
  }

  getVisitors():void{
    this.visitorService.getVisitors().subscribe(data => {
      this.visitdata = data;
    });
  }

  deleteVisitor(id: string): void {
    this.visitorService.deleteVisitor(id).subscribe(() => {
      this.visitdata = this.visitdata.filter(visitor => visitor.id !== id);
    });
  }

  AddVisitor():void{
    this.router.navigate(['/add-visitor']);
  }



  

}
