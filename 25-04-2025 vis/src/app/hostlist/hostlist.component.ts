import { Component, OnInit } from '@angular/core';
import { Hostinfo } from '../hostinfo';
import { Router } from '@angular/router';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-hostlist',
  templateUrl: './hostlist.component.html',
  styleUrls: ['./hostlist.component.css']
})
export class HostlistComponent implements OnInit{
  HostData:Hostinfo[]=[];
  constructor(private router:Router,private srv:DatasourceService)
  {

  }
  ngOnInit(): void {
    this.ShowGrid()
  }

private ShowGrid()
{
  this.srv. GetAllHost()
  .subscribe({
    next:(data)=>{
      this.HostData=data;
    }
  })
}
deletehost(id:any)
{
  this.srv.deleteHost(id).subscribe(
    {
      next:(_)=>{
        this.ShowGrid()
      }
    }
  )
}
GotoAddHost()
{
  this.router.navigate(['addhost'])
}

}


