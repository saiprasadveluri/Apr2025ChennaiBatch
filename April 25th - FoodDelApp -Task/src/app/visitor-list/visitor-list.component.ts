import { Component } from '@angular/core';
import { VisitorInfo, VisitorInfoNew } from '../visitor-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent {
  visitorData:VisitorInfo[]=[];
  visitorDataNew:VisitorInfoNew[]=[];

  constructor(private srv:DataSourceService, private router:Router){
  
  }

  ngOnInit(): void {
    //this.userData=this.srv.GetAllUsers();
    this.srv.GetAllVisitors().subscribe({
      next:(data)=>{
        this.visitorData=data;
      }
    });

  }
  private ShowGrid(){
    this.srv.GetAllVisitors().subscribe({
      next:(data)=>{
        this.visitorDataNew=data;
      }
    });
  }
  DeleteVisitor(id:any){
    this.srv.DeleteVisitor(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
  GotoAddVisitor(){
    this.router.navigate(['AddVisitor']);

  }
  EditVisitor(id:any){
    this.router.navigate([`EditVisitor`])
  }

}
