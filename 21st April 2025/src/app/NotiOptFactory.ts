import { EmailNotificationService } from "./email-notification.service";
import { SmsNotificationService } from "./sms-notification.service"
import { SMTPSetupService } from "./smtpsetup.service";

export function NotiOptFactoryFunction(opt:number){
    return (emailNoti:SMTPSetupService)=>{
        if(opt==1){
            return new SmsNotificationService();
        }
        else{
            return new EmailNotificationService(emailNoti);
        }
    }
}