import { Component, OnInit } from '@angular/core';
import { RestInfo, RestInfoNew, UserInfoNew } from '../rest-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { RDataSourceService } from '../rdata-source.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.css']
})
export class RestaurentListComponent implements OnInit{
    restData:RestInfo[]=[];
    Router:any;
    restDataNew:RestInfoNew[]=[];
      constructor(private http:HttpClient, private srv:RDataSourceService,private router:Router){
    
      }
      ngOnInit(): void {
        // this.http.get<UserInfoNew[]>('http://localhost:3004/userInfo').subscribe({ 
        this.srv.GetAllRest().subscribe({
            next:(data: RestInfoNew[])=>{
                this.restDataNew=data;
            }
        });
      
      }
      private ShowGrid(){
        this.srv.GetAllRest().subscribe({
          next:(data: RestInfoNew[])=>{
            this.restDataNew=data;
          }
        });
      }
    
      DeleteRest(id:any){
        this.srv.DeleteRest(id).subscribe({
          next:(_)=>{
            this.ShowGrid();
          }
        });
        // return this.http.delete(`${this.baseAddress}userInfo/${id}`);
      }
    
    GotoAddRest(){
      this.router.navigate(['home/AddRestaurent'])
    }
    EditRest(id:any){
      this.router.navigate([`home/editrest/${id}`]);
    }
}

//done
//done