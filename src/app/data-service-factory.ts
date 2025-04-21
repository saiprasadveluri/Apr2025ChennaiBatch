import { CloudDataProviderService } from "./cloud-data-provider.service";
import { DBConnectionService } from "./dbconnection.service";
import { DBDataProviderService } from "./dbdata-provider.service"
import { RemoteAccessService } from "./remote-access.service";

export function DataServiceFactoryfunction(Opt:number) {
    return(remoteSrv:RemoteAccessService,dbConSrv:DBConnectionService)=>{
        if(Opt==1){
            return new DBDataProviderService(dbConSrv);
        }
        else{
            return new CloudDataProviderService(remoteSrv);
        }
    }
}
