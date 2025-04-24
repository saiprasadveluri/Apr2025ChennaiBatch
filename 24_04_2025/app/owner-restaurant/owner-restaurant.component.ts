import { Component } from '@angular/core';
import { DataSourceService } from '../data-source.service';
import { UserInfoNew } from '../user-info';
import { RestaurantInfoNew } from '../restaurant-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-restaurant',
  templateUrl: './owner-restaurant.component.html',
  styleUrls: ['./owner-restaurant.component.css']
})
export class OwnerRestaurantComponent {
  restaurantDN : RestaurantInfoNew[] = []
  logged:UserInfoNew|undefined;

constructor(private srv:DataSourceService,private router:Router) {
  let strd: string|null = sessionStorage.getItem("UserData");
  if (strd!= null){
    this.logged=JSON.parse(strd);
  }
  else{
    this.logged=undefined;
  }
}
ngOnInit(){
  this.srv.getAllRest().subscribe({
    next:(d)=>{
      // console.log(d)
      if(this.logged!=undefined){
      this.restaurantDN = d.filter((elm)=>{
        return elm.owner==this.logged?.id;
        // console.log(elm.owner);
        // return elm.owner
      });
    }
    }
  })
}
// GotoAddRest(){
//   this.router.navigate(['home/AddRestaurant'])
// }
// private ShowGrid(){
//   this.srv.getAllRest().subscribe({
//     next:(data)=>{
//       this.restaurantDN = data;
//     }
//   });
// }
// DeleteRest(id:any) {
//   this.srv.DeleteRest(id).subscribe({
//     next:(_)=>{
//       this.ShowGrid();
//     }
//   })
// }
}
