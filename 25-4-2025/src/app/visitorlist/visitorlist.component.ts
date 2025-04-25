import { Component, OnInit } from '@angular/core';
import { Hostinfo, Visitorinfo } from '../vinfo';
import { VDataSourceService } from '../vdata-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitorlist',
  templateUrl: './visitorlist.component.html',
  styleUrls: ['./visitorlist.component.css']
})
export class VisitorlistComponent implements OnInit{
  visitorData:Visitorinfo[]=[];
  constructor(private srv:VDataSourceService,private router:Router,private http:HttpClient ){

  }
  private ShowGrid(){
    this.srv.GetAllVisitors().subscribe({
      next:(data=>{
        this.visitorData=data;
      })
    });
  }
  ngOnInit(): void {
    this.ShowGrid()
  }
  GotoAddVisitor(){
this.router.navigate(['home/addvisitor']);
  }
  EditVisitor(id:any):void{
    this.router.navigate([`home/editvisitor/${id}`]);
  }
  DeleteVisitor(id:any){
    this.srv.DeleteVisitor(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
}
