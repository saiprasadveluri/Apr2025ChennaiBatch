import { Component, OnInit } from '@angular/core';
import { RestInfo } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit{
restData:RestInfo[]=[]
constructor(private srv:DataSourceService,private router:Router,private http:HttpClient)
{

}
  ngOnInit(): void {
    //this.restData=this.srv.GetRestData()
    //this.http.get<RestInfo[]>('http://localhost:3004/restaurantInfo')
    this.srv.GetRestData()
    .subscribe({
      next:(data)=>{
        this.restData=data
      }
    })
  }
  DeleteRest(id:any)
  {
    this.srv.DeleteRest(id).subscribe(//subscribe will have next(success) and eroors
      {
        next:(_)=>{
          this.ShowGrid()
        }
      }
    )
  }
  private ShowGrid()
  {
    this.srv.GetRestData()
    .subscribe({
      next:(data)=>{
        this.restData=data
      }
    })
  }
  EditRest(id:any):void
  {
    this.router.navigate([`EditRest/${id}`])
  }
}
