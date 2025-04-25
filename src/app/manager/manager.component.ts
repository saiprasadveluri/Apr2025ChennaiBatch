import { Component } from '@angular/core';
import { ManaService } from '../mana.service';
import{visitors} from '../userinfo';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-manager',

  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css',
  standalone:true,
  imports:[ReactiveFormsModule],
  providers:[{provide:ManaService,useClass:ManaService,deps:[HttpClient]}]
})
export class ManagerComponent {
   userData : visitors| undefined;
   userArryList :visitors[]= [];
  
  frm:FormGroup =new FormGroup({
    id:new FormControl(""),
    name:new FormControl(""),                            
    
    location:new FormControl(""),
    company:new FormControl(""),
    purpose:new FormControl(""),
    mobile:new FormControl(""),
    visitorDate:new FormControl("")
    
  });
  selectedUser : visitors| undefined;

  constructor(private userService: ManaService)
  {
  }

  ngOnInit(){
    this.getAllUserList();
  }

  getAllUserList(){
    this.userService.getUserList().subscribe((res)=>{
      this.userArryList = res;
    })
  }

  UserDelete(userdata : visitors){
    this.userService.deleteUser(userdata).subscribe((res)=>{
      console.log("deleteing user " , res);
    })
    this.getAllUserList();
  }
  userSelected(userdata : visitors){
    console.log("data" , userdata);
    this.frm.patchValue(userdata);
    this.userService.selectedUser(userdata).subscribe((data)=>{
      this.selectedUser = data;
    })   
  }
  AddNewUser(userdata : visitors){
    if(!this.selectedUser){
    console.log("uscij " ,userdata);
    this.userService.adduser(userdata).subscribe((res)=>{

      this.getAllUserList();
    })
 
    }
    else{
 
      console.log("i am a old uset");
      const newUser =  {...userdata , id : this.selectedUser.id}
      this.userService.updateUser(newUser).subscribe((data)=>{
       console.log("user value update" , data);
       this.getAllUserList();


      })

   

    }
    
  }



}