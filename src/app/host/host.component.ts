import { Component } from '@angular/core';
import { hosservice} from '../hos.service';
import{userinfo} from '../userinfo';

@Component({
  selector: 'app-host',
  imports: [],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css'
})
export class HostComponent {
    VisitorArray:visitorlist[]=[];
    constructor(private visiservice:HosService)
{

 }
 ngOnInt(){
  this.getvisitorlist();
 }
 getvisitorlist(){
  this.visiservice.getvisitorlist().subscribe((res)=>{
    this.VisitorArray=res;
    console.log("visitor list",res)

  }

  
 

}
