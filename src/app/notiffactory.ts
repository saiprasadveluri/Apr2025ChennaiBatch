import { EmailnotifiedService } from "./emailnotified.service";
import { NotificationService } from "./notification.service";
import { SmsnotifiedService } from "./smsnotified.service";
import { SmtpsetupService } from "./smtpsetup.service";

export function notiffactory(Opt:number)
{
    return ( smtp:SmtpsetupService)=>{
        if(Opt==1)
        {
            return new SmsnotifiedService();
        }
        else
        {
            return new EmailnotifiedService(smtp) ;
        }
    }
}