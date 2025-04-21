import { CloudDataServiceService } from "./cloud-data-service.service";
import { DBDataProviderService } from "./db-data-provider.service";
import { RemoteAccessService } from "./remote-access.service";
 export function DataServiceFactoryFunction(Opt:number)
 {
    return (remoteSrv:RemoteAccessService)=>{
        if(Opt==1)
        {
            return new DBDataProviderService();
        }
        else
        {
            return new CloudDataServiceService(remoteSrv)
        }
    }
 }