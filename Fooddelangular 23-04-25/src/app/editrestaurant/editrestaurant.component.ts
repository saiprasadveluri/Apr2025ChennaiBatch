import { Component } from '@angular/core';
import { Restaurantinfo } from '../restaurantinfo';
import { FormControl, FormGroup } from '@angular/forms';
import { DatasourceService } from '../datasource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editrestaurant',
  templateUrl: './editrestaurant.component.html',
  styleUrls: ['./editrestaurant.component.css']
})
export class EditrestaurantComponent {
  currentUser: Restaurantinfo = {};
  frm: FormGroup = new FormGroup({
    name: new FormControl(this.currentUser.name),
    location: new FormControl(this.currentUser.location),
    owner: new FormControl(this.currentUser.owner),
  });
  currentRest: Restaurantinfo = {};  // Ensure this is initialized correctly

  constructor(private srv: DatasourceService, private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.paramMap.subscribe((prms)=>{
      let SelId=prms.get('id');
      if(SelId!=null){
        this.srv.GetRestDataById(SelId).subscribe(
          {
            next:(data)=>{
              this.currentRest=data;
              this.PrepareForm1();
          }
        });
      }
    });
  }

  private PrepareForm1(): void {
    this.frm.controls['name'].setValue(this.currentUser.name);
    this.frm.controls['location'].setValue(this.currentUser.location);
    this.frm.controls['owner'].setValue(this.currentUser.owner);
  }

  ngOnInit(): void {}

  EditRestaurant(): void {
    this.currentRest.name = this.frm.controls['name'].value;
    this.currentRest.location = this.frm.controls['location'].value;
    this.currentRest.owner = this.frm.controls['owner'].value;

    this.srv.EditRestaurant(this.currentRest).subscribe({
      next: (_) => {
        this.router.navigate(['RestaurantList']);  // Redirect to the restaurant list after successful edit
      }
    });
  }
}
