import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent {
  visitorData:VisitorInfo[]=[];
  constructor(private http:HttpClient,private srv:DataSourceService,private router:Router)
  {
  
  }
  ngOnInit():void{
    this.showGrid()
  }
  private showGrid()
  {
    this.srv.GetAllVisitors ()
     .subscribe({
      next:(data)=>{
        this.visitorData=data;
      }
       
     })
  }
  DeleteVisitor(id:any)
  {
    this.srv.DeleteVisitor(id).subscribe(
      {
        next:(_)=>{
          this.showGrid();
        }
      }
    )
  }
  GotoAddVisitor()
  {
   this.router.navigate(['AddVisitor']);
  }
  EditVisitor(id:any):void
  {
    this.router.navigate([`EditVisitor/${id}`]);
  }
}
