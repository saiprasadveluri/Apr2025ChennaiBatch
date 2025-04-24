import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';
import { HotelInfo } from '../hotel-info';
import { UserService } from '../user.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent  implements OnInit{
  UserData : UserInfo[] = [];
  hotelData : HotelInfo[] = [];
  users:any [] = [];
  constructor(private srv:DataSourceService, private router:Router, private userService: UserService){ }

ngOnInit(): void {
  this.UserData = this.srv.GetAllUsers();
  this.hotelData = this.srv.GetAllHotel();
  this.loadUsers();
}

loadUsers(): void {
  this.userService.getUsers().subscribe(data => {
    this.users = data;
  });
}

deleteUser(id: number): void {
  this.userService.deleteUser(id).subscribe(() => {
    this.loadUsers(); // Refresh 
  });
}

GotoADDUser(){
  this.router.navigate(['add-user']);
}

GotoADDHotel(){
  this.router.navigate(['AddRestraunt']);
}

editUser(id: number): void {
  this.router.navigate(['/edit-user', id]);
}
}
