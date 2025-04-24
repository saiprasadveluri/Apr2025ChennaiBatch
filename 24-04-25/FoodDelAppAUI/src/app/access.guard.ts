import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strUserData=sessionStorage.getItem('UserData');
  let AllowedRoles=route.data['roles'];
  if(strUserData==null)//Not User is logged in condition it will be null
  {
    return false;
  }
  let uObj:UserInfoNew=JSON.parse(strUserData);
  let SelRol=AllowedRoles.find((val:string)=>val==uObj.role);
  if(SelRol!=undefined){return true;}
  else{return false;}
  // if(uObj.role=="Admin")//User Logged in as Admin it will allow
  //   return true;
  // else
  //   return false;//Allow access...
};
