import { Component, OnInit } from '@angular/core';
import { VisitorServicesComponent } from '../visitor.service';
import { Visitor } from '../visitor';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit{
visitors:Visitor[]=[];

constructor(private visitorService:VisitorServicesComponent){}
  ngOnInit(): void {
    this.loadVisitors();
  }
  loadVisitors() {
    this.visitorService.getVisitors().subscribe((data:Visitor[])=>{
      this.visitors=data;
  });
}
deleteVisitor(visitorId:number):void{
  const visitor=this.visitors.find(v=>v.visitorId===visitorId);
  if(visitor?.readOnly){
    return;
    }
    if(confirm('sure')){
      this.visitorService.deleteVisitor(visitorId).subscribe(()=>{
        this.loadVisitors();
      });
    }
  }
  addVisitorToList(visitor:Visitor):void{
  this.visitors.push(visitor);

  }
}
