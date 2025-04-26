import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HttpClient } from '@angular/common/http';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitorlist',
  templateUrl: './visitorlist.component.html',
  styleUrls: ['./visitorlist.component.css']
})
export class VisitorlistComponent {
  visitordata:VisitorInfo[]=[];
  visitorlist: any;

  constructor(private  http:HttpClient,private srv:DatasourceService,private router:Router ){
  
  }
  ngOnInit():void{
  
    this.ShowGrid()
  }
  private ShowGrid()
  {
    this.srv. GetAllvisitors()
    .subscribe({
      next:(data)=>{
        this.visitorlist=data;
      }
    })
  }
  deletevisitor(id:any){
    this.srv. deletevisitor(id).subscribe(
      {
        next:(_)=>{
          this.ShowGrid();
  
        }
      }
    )
  }
  GotoAddvisitor(){
  this.router.navigate(['home/addvisitor']);
  }
  Editvisitor(id:any):void{
    this.router.navigate([`home/editvisitor/${id}`]);
  }
  }
    
  
