import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HttpClient } from '@angular/common/http';
import { DatasourceServiceService } from '../datasource-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitorlist',
  templateUrl: './visitorlist.component.html',
  styleUrls: ['./visitorlist.component.css']
})
export class VisitorlistComponent implements OnInit{
  visitor:VisitorInfo[]=[];

  constructor(private  http:HttpClient,private srv:DatasourceServiceService,private router:Router ){
  
  }
  ngOnInit():void{
    
    this.ShowGrid()

  }
  private ShowGrid()
  {
    this.srv.GetAllVisitors()
    .subscribe({
      next:(data)=>{
        this.visitor=data;
      }
    })
  }
  deletevisitor(id:any){
    this.srv.deletevisitor(id).subscribe(
      {
        next:(_)=>{
          this.ShowGrid();
  
        }
      }
    )
  }
  GotoAddVisitor(){
  this.router.navigate(['home/addvisitor']);
  }
  Editvisitor(id:any):void{
    this.router.navigate([`home/editvisitor/${id}`]);
  }
  }


