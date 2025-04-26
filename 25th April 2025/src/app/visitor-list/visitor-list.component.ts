import { Component, OnInit } from '@angular/core';
import { visitorInfo } from '../user-info';
import { HttpClient } from '@angular/common/http';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent  implements OnInit{
  visitorData:visitorInfo[]=[];
  constructor(private http:HttpClient, private srv: DataSourceService, private router:Router)
  {
    
  }

  ngOnInit(): void {
    this.ShowGrid()
    this.srv.GetAllVisitors().subscribe({
      next:(data)=>{
        this.visitorData=data;
      }
    })
  }

  private ShowGrid()
  {
    this.srv.GetAllVisitors().subscribe(
      {
        next:(data) => {
          this.visitorData = data;
        }
      }
    )
  }

  DeleteVisitor(id:any)
  {
    this.srv.DeleteVisitor(id).subscribe(
      {
        next:(_) => {
          this.ShowGrid();
        }
      }
    )
  }

  GotoAddVisitor()
  {
    this.router.navigate(['home/AddVisitor']);
  }

  EditVisitor(id:any)
  {
    this.router.navigate([`home/EditVisitor/${id}`]);
  }

}
