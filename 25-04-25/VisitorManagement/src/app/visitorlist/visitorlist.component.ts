import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitorlist',
  templateUrl: './visitorlist.component.html',
  styleUrls: ['./visitorlist.component.css']
})
export class VisitorlistComponent implements OnInit{
  visitorData:VisitorInfo[]=[];
  constructor(private http:HttpClient, private srv:DataSourceService,private router:Router){

  }
  ngOnInit():void{
    this.srv.GetAllVisitors().subscribe({
      next: (data) => {
        this.visitorData = data;
      }
    });

  }
  GotoAddVisitor(){
    this.router.navigate(['AddVisitor']);

  }
  private ShowGrid(){
    this.srv.GetAllVisitors().subscribe({
      next:(data)=>{
        this.visitorData=data;
      }
    });

  }
  DeleteVisitor(id:any){this.srv.DeleteVisitor(id).subscribe(
    {
      next:(_)=>{this.ShowGrid();

      }
    }
  )

  }
  EditVisitor(id:any):void{
    this.router.navigate([`Home/EditVisitor/${id}`]);
  }

}
