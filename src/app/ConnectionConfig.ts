import { InjectionToken } from "@angular/core";
import { ConnectionInfo } from "./connection-info";
import { UrlInfo } from "./urlInfo";
import { SmsData } from "./sms-data";
import { EmData } from "./em-data";

export const CONNECTION_INFO_TOKEN=new InjectionToken<ConnectionInfo>('conInfo')
export const URL_INFO_TOKEN=new InjectionToken<UrlInfo>('urlInfo')
export const SmsToken =new InjectionToken<SmsData>('smsInfo')
export const EmToken=new InjectionToken<EmData>('EmInfo')