import { EmailNotificationService } from "./email-notification.service";
import { SMPTDataObj } from "./smptdata-obj";
import { SMSNotificationService } from "./smsnotification.service";
import { SMTPSetupServiceService } from "./smtpsetup-service.service";

export function NotifiactionFactory(Opt:number){
    return (Eamilidnoti:SMTPSetupServiceService)=>{
            if(Opt==1)
            {
                return new SMSNotificationService;
            }
            else
            {
                // return new CloudDataServiceService(remoteSrv)
                return new EmailNotificationService(Eamilidnoti);
            }
}
}