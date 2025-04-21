import { InjectionToken } from "@angular/core";
import { smtpsetup } from "./smtpsetup";

export const EMAIL_INFO=new InjectionToken<smtpsetup>('email information')