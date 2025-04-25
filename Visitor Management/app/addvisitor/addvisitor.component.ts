import { Component } from '@angular/core';
import { VisitorInfo } from '../visitor-info';
import { DatasourceService } from '../datasource.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvisitor',
  templateUrl: './addvisitor.component.html',
  styleUrls: ['./addvisitor.component.scss']
})
export class AddvisitorComponent {
  vData:VisitorInfo = {};
  form:FormGroup = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
    location: new FormControl(''),
    comapny: new FormControl(''),
    date: new FormControl(''),
    phone: new FormControl(''),
    hostrole: new FormControl('')
  })

  constructor(private vsrv:DatasourceService,private router:Router){}
  visitorAdd(){
    let visit:VisitorInfo={
    name: this.form.controls['name'].value,
    id: this.form.controls['id'].value,
    location: this.form.controls['location'].value,
    comapny: this.form.controls['comapny'].value,
    date: this.form.controls['date'].value,
    phone: this.form.controls['phone'].value,
    hostrole: this.form.controls['hostrole'].value
    }
  this.vsrv.addVisitor(visit).subscribe({
    next:(d)=>{
      this.router.navigate(['/home/listV'])
    }
  })
    
  }
}
