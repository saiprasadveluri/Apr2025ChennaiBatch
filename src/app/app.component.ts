import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';

import { Router } from '@angular/router';
import { hosservice } from './hos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ManagerComponent,HostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

















