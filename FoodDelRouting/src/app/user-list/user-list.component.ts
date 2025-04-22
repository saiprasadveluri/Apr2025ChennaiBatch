import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  userData:UserInfo[]=[];
  constructor(private Srv:DataSourceService,private router:Router){//to get the methods from service

  }
  ngOnInit(): void {
    this.userData=this.Srv.GetAllUsers();
  }
  GotoAddUser(){
    this.router.navigate(['AddUser'])
  }
  GotoAddRestaurant(){
    this.router.navigate(['AddRestaurant'])
  }
}
