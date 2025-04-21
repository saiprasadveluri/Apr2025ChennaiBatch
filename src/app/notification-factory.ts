import { EmailServService } from "./email-serv.service";
import { SmsAccessService } from "./sms-access.service";
import { SmsServService } from "./sms-serv.service";

export function NotificationFactory(opt:number) {
    return (sona: SmsAccessService, emailServ: EmailServService) => {
        if (opt == 1) {
            return new SmsServService(sona);
        }
        else {
            return new EmailServService();
            // return false;
        }
    }
}
