import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VistorInfo } from '../vistor-info';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vistor-list',
  templateUrl: './vistor-list.component.html',
  styleUrls: ['./vistor-list.component.css']
})
export class VistorListComponent implements OnInit{
  vistData:VistorInfo[]=[]
constructor(private http:HttpClient,private srv:DataSourceService,private router:Router) 
{
  
}
GotoAddNewVist()
{
  this.router.navigate(['AddNewVistor'])
}
ngOnInit():void
{
  this.srv.GetAllVist()
  .subscribe({
    next:(data)=>{
      this.vistData=data
    }
  })
}
private ShowGrid()
{
  this.srv.GetAllVist()
  .subscribe({
    next:(data)=>{
      this.vistData=data
    }
  })
}
DeleteVist(id:any)
{
  this.srv.DeleteVist(id).subscribe(
    {
      next:(_)=>{
        this.ShowGrid()
      }
    }
  )
}
EditVist(id:any):void
{
  this.router.navigate([`EditVist/${id}`])
}
}
    


