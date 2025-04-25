import { Component } from '@angular/core';
import { HostInfo, VisitorInfo } from '../vm-info';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-host-visitor-list',
  templateUrl: './host-visitor-list.component.html',
  styleUrls: ['./host-visitor-list.component.css']
})
export class HostVisitorListComponent {

  VisitorData:VisitorInfo[]=[];

  loggedInUserData:HostInfo|undefined
  constructor(private srv:VisitorService){
    this.srv.getHosts().subscribe({
      next:(data)=>{
        let strUserData:string|null=sessionStorage.getItem('Data');
        if(strUserData!=null){
          this.loggedInUserData=JSON.parse(strUserData)
        }
        else{
          this.loggedInUserData=undefined
        }
      }
    })
  }
  ngOnInit(): void {
    this.srv.getVisitors()
    .subscribe({
      next:(data)=>{ 
        console.log(data);   
        console.log(this.loggedInUserData);       
        if(this.loggedInUserData!=undefined){
          this.VisitorData=data.filter((v)=>{
            return v.name==this.loggedInUserData?.name
          })
        }
      } 
    });
    
}

deleteVisitor(id: string): void {
  this.srv.deleteVisitor(id).subscribe(() => {
    this.VisitorData = this.VisitorData.filter(v => v.id !== id);
  });
}


}
