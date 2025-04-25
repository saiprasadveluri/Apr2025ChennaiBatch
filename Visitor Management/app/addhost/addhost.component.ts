import { Component } from '@angular/core';
import { HostInfo } from '../host-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhost',
  templateUrl: './addhost.component.html',
  styleUrls: ['./addhost.component.scss']
})
export class AddhostComponent {
  hData: HostInfo = {};
  form: FormGroup = new FormGroup({
    
    id: new FormControl(''),
    name: new FormControl(''),
    employee: new FormControl(''),
    depart: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    User: new FormControl(''),
    hostrole: new FormControl('')
  })

  constructor(private vsrv: DatasourceService, private router: Router) { }
  hostAdd() {
    let host: HostInfo = {
      
      id: this.form.controls['id'].value,
      name: this.form.controls['name'].value,
      employee: this.form.controls['employee'].value,
      depart: this.form.controls['depart'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      User: this.form.controls['User'].value,
      hostrole: this.form.controls['hostrole'].value
    }

    this.vsrv.addHost(host).subscribe({
      next:()=>
      {
        this.router.navigate(['home/listH'])
      }
    })
    
  }
}
