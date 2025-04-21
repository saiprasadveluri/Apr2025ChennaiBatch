import { InjectionToken } from "@angular/core";
import { Smtpsetup } from "./smtpsetup";


export const EMAIL_INFO = new InjectionToken<Smtpsetup>('email information')