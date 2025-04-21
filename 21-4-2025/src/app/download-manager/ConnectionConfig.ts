import { InjectionToken } from "@angular/core";
import { ConnectionInfo } from "../connection-info";
import { UrlInfo } from "../url-info";
import { SMPTDataObj } from "../smptdata-obj";

export const CONNECTION_INFO_TOKEN=new InjectionToken<ConnectionInfo>('coninfo');
export const URL_INFO_TOKEN=new InjectionToken<UrlInfo>('url-info');
export const Email_Token=new InjectionToken<SMPTDataObj>('Emailinfo');