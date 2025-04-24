import { InjectionToken } from "@angular/core";
import { SmtpInfo } from "./Smtp-info";


export const SMTP_TOKEN=new InjectionToken<SmtpInfo>('smtpinfo')