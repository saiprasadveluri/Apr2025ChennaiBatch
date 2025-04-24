import { EmailnotificationService } from "./emailnotification.service";
import { SmsnotificationService } from "./smsnotification.service";
import { SmtpsetupService } from "./smtpsetup.service";



export function NotificationFactoryFunction(val: number) {
    return (smtp: SmtpsetupService) => {
    if (val == 1) {
    return (new SmsnotificationService);
    } 
    else 
    {
    return (new EmailnotificationService(smtp));
    }
    
}
}