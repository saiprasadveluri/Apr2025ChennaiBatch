import { InjectionToken } from "@angular/core";
import { ConnectionInfo } from "./connection-info";
import { UrlInfo } from "./url-info";

export const CONNECTION_INFO_TOKEN = new InjectionToken<ConnectionInfo>('conInfo');

export const URL_INFO_TOKEN=new InjectionToken<UrlInfo>('URL_Info');