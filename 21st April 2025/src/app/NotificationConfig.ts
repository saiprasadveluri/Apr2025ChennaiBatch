import { InjectionToken } from "@angular/core";
import { EmailInfo } from "./email-info";

export const EMIAL_INFO_TOKEN=new InjectionToken<EmailInfo>('email-Info');