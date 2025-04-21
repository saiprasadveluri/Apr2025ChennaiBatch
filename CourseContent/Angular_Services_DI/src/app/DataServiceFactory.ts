import { CloudDataProviderService } from "./cloud-data-provider.service";
import { DbConnectionService } from "./db-connection.service";
import { DBDataProviderService } from "./dbdata-provider.service"
import { RemoteAccessorService } from "./remote-accessor.service";

export function DataServiceFactoryFunction(Opt:number)
{
    return (remoteSrv:RemoteAccessorService,dbCoNSrv:DbConnectionService)=>{
        if(Opt==1)
        {
            return new DBDataProviderService(dbCoNSrv);
        }
        else
        {
            return new CloudDataProviderService(remoteSrv);
        }
    }
}