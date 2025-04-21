



import { Component, Optional } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Smsnotification } from './classes/smsnotification';
import { Emailnotification } from './classes/emailnotification';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageTitle: string | null = '';
  userChoice: string = '';
  message?: string;

  constructor(
    @Optional() private smsService: Smsnotification,
    @Optional() private emailService: Emailnotification
  ) {}

  sendNotification() {
    const notificationMap: { [key: string]: any } = {
      sms: this.smsService,
      email: this.emailService
    };
    
    const service = notificationMap[this.userChoice];
    this.message = service?.sendNotification(`${this.userChoice.toUpperCase()} Notification`);
  }
}







