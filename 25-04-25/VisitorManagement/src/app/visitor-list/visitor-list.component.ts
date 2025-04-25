import { Component, OnInit } from '@angular/core';
import { Visitor } from '../visitor';
import { VisitorService } from '../visitor.service';

 
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html'
})
export class VisitorListComponent implements OnInit {
  visitors: Visitor[] = [];
 
  constructor(private visitorService: VisitorService) {}
 
  ngOnInit() {
    this.loadVisitors();
  }
 
  loadVisitors() {
    this.visitorService.getAllVisitors().subscribe(data => {
      this.visitors = data;
    });
  }
 
  deleteVisitor(id: string) {
    if (confirm('Are you sure you want to remove this visitor?')) {
      this.visitorService.deleteVisitor(id).subscribe(() => {
        this.loadVisitors();
      });
    }
  }
}
