import { EMailNotifierService } from "./email-notifier.service";
import { SMSNotifierService} from "./smsnotifier.service";
import { SMTPSetupService} from "./smtpsetup.service";


export function NotificationFactory(Opt:number){
    return(remoteEmail:SMTPSetupService)=>{
        if(Opt==1)
        {
            return new SMSNotifierService()
        }
        else
        {
            return new EMailNotifierService(remoteEmail)

        }
    }
}
   