import { InjectionToken } from "@angular/core";
import { SmssetupService } from "./smssetup.service";

export const EMAIL_INFO=new InjectionToken<SmssetupService>('email info')