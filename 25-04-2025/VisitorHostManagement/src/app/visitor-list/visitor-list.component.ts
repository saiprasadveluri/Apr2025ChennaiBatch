import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { VisitorSourceService } from '../visitor-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit{
  VisitorData:VisitorInfo[]=[];
  constructor(private srv:VisitorSourceService, private router:Router){

  }
  ngOnInit(): void {
    this.ShowGrid()
    } 
    private ShowGrid(){
    this.srv.GetAllVisitors()
    .subscribe({
      next:(data)=>{
        this.VisitorData=data;
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
    this.router.navigate(['Home/AddVisitor'])
  }
  EditVisitor(id:any){
    this.router.navigate([`Home/EditVisitor/${id}`])
  }
}
