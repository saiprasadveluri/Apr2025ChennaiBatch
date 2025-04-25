import { Component, OnInit } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss']
})
export class VisitorListComponent implements OnInit {
  vdata:VisitorInfo[] = [];
  constructor(private vsrv:DatasourceService){}

  ngOnInit(): void {
    this.vsrv.getVisit().subscribe({
      next:(d)=>{
        this.vdata = d;
      }
    })
  }
  private ShowGrid(){
    this.vsrv.getVisit().subscribe({
      next:(data)=>{
        this.vdata = data;
      }
    });
  }
  DeleteUser(id:any) {
    this.vsrv.Delete(id).subscribe({
      next:(_)=>{
        this.ShowGrid();
      }
    })
  }
}
