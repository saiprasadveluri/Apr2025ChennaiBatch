import { Component, OnInit } from '@angular/core';
import { HostInfo } from '../vm-info';
import { DataSourceService } from '../data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit{

  hostdata:HostInfo[]=[];

  constructor(private hostService:DataSourceService, private router:Router){
    
  }
  ngOnInit(): void {
    this.getHosts();
  }

  getHosts():void{
    this.hostService.getHosts().subscribe(data =>{
      this.hostdata=data;
    });
  }

  AddHost():void{

    this.router.navigate(['/add-host']);

  }

  DeleteHost(id:string):void{
    this.hostService.deleteHost(id).subscribe(()=>{
      this.hostdata=this.hostdata.filter(host=>host.id!==id);
    })

  }


}




  
//     AddHost(): void {
//       this.router.navigate(['/add-host']);
//     }
  
//     DeleteHost(id: number): void {
//       this.hostService.deleteHost(id).subscribe(() => {
//         this.hostdata = this.hostdata.filter(host => host.id !== id);
//       });
//     }
//   }
  