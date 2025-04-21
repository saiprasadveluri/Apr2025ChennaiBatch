import { InjectionToken } from "@angular/core";
import { SmtpInfo } from "./smtp-info";

export const SMTP_TOKEN=new InjectionToken<SmtpInfo>('smtpinfo')