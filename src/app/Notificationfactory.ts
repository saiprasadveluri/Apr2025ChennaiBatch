import { EmailnotifierService } from "./emailnotifier.service";
import { SmsnotifiedService } from "./smsnotified.service";
import { SmssetupService } from "./smssetup.service";
import { NotificationService } from "./notification.service";



export function NotificationFactory(Opt:number)
{
    return ( smtpsetup:SmssetupService)=>{
        if(Opt==1)
        {
            return new SmsnotifiedService();
        }
        else
        {
            return new EmailnotifierService(smtpsetup);
        }
    }
}