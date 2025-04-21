import { SmsNotifyService } from './sms-notify.service';
import { EmailNotifyService } from './email-notify.service';
import { SmsAccessService } from './sms-access.service';
import { EmailAccessService } from './email-access.service';


export function NotificationServiceFactoryfunction(Opt:number) {
    return(SMss:SmsAccessService,Emss:EmailAccessService)=>{
        if(Opt==1){
            return new SmsNotifyService(SMss);
        }
        else{
            return new EmailNotifyService(Emss);
        }
    }
}