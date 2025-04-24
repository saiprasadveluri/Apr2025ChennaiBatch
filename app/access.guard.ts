import { CanActivateFn } from '@angular/router';
import { USerInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strUserData=localStorage.getItem('UserData');
  let AllowedRoles:string[]=route.data['roles'];
  if(strUserData==null)
  {
    return false;
  }
  let uObj:USerInfoNew=JSON.parse(strUserData);
  let SelRol=AllowedRoles.find((val:string)=>val==uObj.role)
  if(SelRol!=undefined)
  {
    return true;
  
  }
  else{
    return false;
  }
  

};
