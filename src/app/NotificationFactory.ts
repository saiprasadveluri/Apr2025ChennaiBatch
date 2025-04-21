import { EmailNotifierService } from "./email-notifier.service";
import { SmsNotifierService } from "./sms-notifier.service";
import { SmtpsetupService } from "./smtpsetup.service";


export function NotificationFactory(Opt: number) {
    return (remoteEmail: SmtpsetupService) => {
        if (Opt == 1) {
            return new SmsNotifierService()
        }
        else {
            return new EmailNotifierService(remoteEmail)

        }
    }
}
