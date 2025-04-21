// import { InjectionToken } from "@angular/core";
// import { ConnectionInfo } from "./connection-info";

// export const ConnectInfoToken: new InjectionToken<ConnectionInfo>('conInfo');



import { InjectionToken } from '@angular/core';
import { ConnectionInfo } from './connection-info';
import { UrlInfo } from './url-info';
import { SmsData } from './sms-data';

export const ConnectInfoToken = new InjectionToken<ConnectionInfo>('ConInfo');
export const UrlToken = new InjectionToken<UrlInfo>('UrlInfo');
export const SmsToken = new InjectionToken<SmsData>('smsinfo');
