import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class SmtpSetupService {
  getSmtpConfig() {
    return {
      host: 'smtp.example.com',
      port: 587,
      secure: false
    };
  }
}
