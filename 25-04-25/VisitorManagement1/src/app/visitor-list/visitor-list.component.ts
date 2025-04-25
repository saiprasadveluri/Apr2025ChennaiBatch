import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataSourceService } from '../data-source.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit{
   visitorData:VisitorInfo[]=[];
   
   constructor(private dsrv:DataSourceService,private http:HttpClientModule, private router:Router){
      
    }
    ngOnInit(): void {
      this.ShowDetails();
    }
    private ShowDetails(){
      this.dsrv.GetAllVisitor()
      .subscribe({next:(data)=>{this.visitorData=data;}})
    }
    GotoAddVisitor(){
      this.router.navigate(['Home/AddVisitor'])
    }
    DeleteVisitor(id:any){
      this.dsrv.DeleteVisitor(id).subscribe({
        next:(_)=>{
          this.ShowDetails();
        }
    })
    }
    EditVisitor(id:any){
      this.router.navigate([`Home/EditVisitor/${id}`])
    }
}
