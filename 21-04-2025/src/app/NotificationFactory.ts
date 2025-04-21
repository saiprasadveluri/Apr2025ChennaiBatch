import { EmailService } from "./email.service";
import { NotificationService } from "./notification.service";
import { SmsService } from "./sms.service";
import { SmtpSetupService } from "./smtp-setup.service";

export function NotificationFactoryFunction(val:number){
    return(smtp:SmtpSetupService)=>
    {
        if(val==1){
            return(new SmsService)
        }
        else{
            return new EmailService(smtp);
        }
    }
}