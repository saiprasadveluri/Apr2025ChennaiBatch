import { EmailService } from "./email.service";
import { NotificationserverService } from "./notificationserver.service";
import { SmsNotificationService } from "./sms-notification.service";
import { SMTPServiceService } from "./smtpservice.service";

export function DataServiceFactoryFunction(Opt:number)
{
    return(SMPTSrv:SMTPServiceService)=>{
        if(Opt==1)
        {
            return (new SmsNotificationService);
        }
        else
        {
            return new EmailService(SMPTSrv);
        }
    }
}