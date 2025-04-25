import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { DatasourceService } from '../datasource.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitoe-list',
  templateUrl: './visitoe-list.component.html',
  styleUrls: ['./visitoe-list.component.css']
})
export class VisitoeListComponent implements OnInit{
  visitorData:VisitorInfo[]=[]
  constructor(private router:Router,private srv:DatasourceService)
  {

  }
  ngOnInit(): void {
    this.ShowGrid()
  }

private ShowGrid()
{
  this.srv.GetAllVisitors()
  .subscribe({
    next:(data)=>{
      this.visitorData=data;
    }
  })
}
deletevisitor(id:any)
{
  this.srv.deleteVisitor(id).subscribe(
    {
      next:(_)=>{
        this.ShowGrid()
      }
    }
  )
}
GotoAddVisitor()
{
  this.router.navigate(['add-visitor/home'])
}
EditVisitor(id:any):void
{
  this.router.navigate([`editvisitor/${id}`])
}
}
  
