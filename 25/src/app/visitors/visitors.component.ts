import { Component, OnInit } from '@angular/core';
import { Visitor } from '../visitor';
import { VisitorService } from '../visitor.service';
@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html'
})
export class VisitorsComponent implements OnInit {
  visitors: Visitor[] = [];
  visitor: Partial<Visitor> = {};
  updateMode = false;
  editingId = '';

  constructor(private visitorService: VisitorService) {}

  ngOnInit() {
    this.loadVisitors();
  }

  loadVisitors() {
    this.visitorService.getAllVisitors().subscribe(data => this.visitors = data);
  }

  generateId(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

  submit() {
    if (this.updateMode) {
      this.visitorService.updateVisitor(this.editingId, this.visitor as Visitor).subscribe(() => {
        this.loadVisitors();
        this.cancel();
      });
    } else {
      const newVisitor: Visitor = {
        id: this.generateId(),
        ...this.visitor
      } as Visitor;

      this.visitorService.addVisitor(newVisitor).subscribe(() => {
        this.loadVisitors();
        this.visitor = {};
      });
    }
  }

  edit(v: Visitor) {
    this.updateMode = true;
    this.editingId = v.id;
    this.visitor = { ...v };
  }

  cancel() {
    this.updateMode = false;
    this.editingId = '';
    this.visitor = {};
  }

  deleteVisitor(id: string) {
    this.visitorService.deleteVisitor(id).subscribe(() => this.loadVisitors());
  }
}