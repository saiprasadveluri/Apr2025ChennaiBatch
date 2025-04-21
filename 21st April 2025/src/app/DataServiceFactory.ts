import { CloudDataProviderService } from "./cloud-data-provider.service";
import { DBConnectionService } from "./dbconnection.service";
import { DBDataProviderService } from "./dbdata-provider.service";
import { RemoteAccessorService } from "./remote-accessor.service";

export function DataServiceFactoryFunction(Opt:number){
    return (remoteSrc:RemoteAccessorService, dbSrv:DBConnectionService)=>{
        if(Opt==1){
            return new DBDataProviderService(dbSrv);
        }
        else{
            return new CloudDataProviderService(remoteSrc);
        }
    }
}