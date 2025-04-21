import { InjectionToken } from "@angular/core";
import { ConnectionInfo } from "./connection-info";
import { Urlinfo } from "./urlinfo";
import { Smsdata } from "./smsdata";

export const Connection_Info_token=new InjectionToken<ConnectionInfo>('conInfo');
export const urltoken=new InjectionToken<Urlinfo>('urlInfo');
export const smstoken=new InjectionToken<Smsdata>('smsInfo');