import { Component, OnInit } from '@angular/core';
import { VisitorSourceService } from '../visitor-source.service';
import { VisitInfo } from '../visit-info';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit{
  visitList:VisitInfo[]=[]
constructor(private srv:VisitorSourceService,private router:Router,private http:HttpClient)
{

}
  ngOnInit(): void {
    // this.srv.GetAllVisitData().subscribe({
    //   next:(data)=>{
    //     this.visitList=data
    //   }
    // })
    this.ShowData()
  }
  private ShowData()
  {
    this.srv.GetAllVisitData().subscribe({
      next:(data)=>{
        this.visitList=data
      }
    })
  }
  DeleteVisit(id:any)
  {
    this.srv.DeleteVisit(id).subscribe({
      next:(_)=>{
        this.ShowData()
      }
    })
  }
  GoBacktoAddVisit()
  {
    this.router.navigate(['AddVisit'])
  }
  EditVisit(id:any)
  {
    this.router.navigate([`EditVisit/${id}`])
  }
}
