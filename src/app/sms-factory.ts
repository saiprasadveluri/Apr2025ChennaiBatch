import { EmailProviderService } from "./email-provider.service";
import { NotificationService } from "./notification.service";
import { SmsProviderService } from "./sms-provider.service";
import { SmsServicesService } from "./sms-services.service";

export function SmsFactoryFunction(Opt:number) {
    return (sms:SmsServicesService)=>{
            if(Opt==1){
                return new EmailProviderService();
            }
            else{
                return new SmsProviderService(sms);
    
            }
        }
}
