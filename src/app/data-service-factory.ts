import { CloudDataProviderService } from "./cloud-data-provider.service";
import { DbConnectionService } from "./db-connection.service";
import { DBDataProviderService } from "./dbdata-provider.service";
import { RemoteAccessService } from "./remote-access.service";

export function DataServiceFactoryF(opt:number) {
    return (remServ:RemoteAccessService,dbcon:DbConnectionService) => {
        if(opt==1){
            return new DBDataProviderService(dbcon);
        }
        else{
            return new CloudDataProviderService(remServ);
    }
}
}