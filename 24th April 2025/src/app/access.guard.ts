import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strUserData=sessionStorage.getItem('UserData');

  let AllowRoles:string[]=route.data['roles'];
  if(strUserData==null)//Not logged in
    {
    return false;
  }
  
  //user LoggedIn
  let uObj:UserInfoNew=JSON.parse(strUserData);
  let SelRol=AllowRoles.find((val:string)=>val==uObj.role);
  if(SelRol!=undefined){
    return true;
  }

  // if(uObj.role=='Admin')//user Logged in with admin creds
  //   return true;
  else
    return false;
};
