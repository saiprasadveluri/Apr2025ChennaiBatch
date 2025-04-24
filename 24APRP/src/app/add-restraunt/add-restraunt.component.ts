import { Component } from '@angular/core';
import { HotelInfo } from '../hotel-info';
import { FormControl, FormGroup } from '@angular/forms';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-restraunt',
  templateUrl: './add-restraunt.component.html',
  styleUrls: ['./add-restraunt.component.css']
})
export class AddRestrauntComponent {
    frm:FormGroup = new FormGroup({
        hotelId:new FormControl(""),
        hotelname:new FormControl(""),
        email:new FormControl(""),
        password:new FormControl(""),
        type:new FormControl(""),
      });
    
      constructor(private srv:DataSourceService, private router:Router){
    
      }
    
      AddNewHotel(){
    
        let hotelData:HotelInfo = {
          hotelId:this.frm.controls['hotelId'].value,
          hotelname:this.frm.controls['hotelname'].value,
          email:this.frm.controls['email'].value,
          password:this.frm.controls['password'].value,
          type:this.frm.controls['type'].value
        };
        console.log("Done");
        console.log(hotelData);
        this.srv.AddNewHotelEntry(hotelData);
      } 
}
