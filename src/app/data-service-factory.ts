import { CloudDataProviderService } from "./cloud-data-provider.service";
import { DbConnectionService } from "./db-connection.service";
import { DBDataProviderService } from "./dbdata-provider.service"
import { RemoteAccessService } from "./remote-access.service";

export function DataServiceFactoryFunction( Opt:number){
    return (remoteSrv:RemoteAccessService,dbconsrv:DbConnectionService)=>{
        if(Opt==1){
            return new DBDataProviderService(dbconsrv);
        }
        else{
            return new CloudDataProviderService(remoteSrv);

        }
    }

}
