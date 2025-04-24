import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strUserData=sessionStorage.getItem('UserData');
  let AllowedRoles:string[]=route.data['roles'];
  if(strUserData==null)//NOT LOGGED IN
  {
    return false;
  }

  //user loggedIn
  let uObj:UserInfoNew=JSON.parse(strUserData);
  let SelRol= AllowedRoles.find((val:string)=>val==uObj.role);
  if(SelRol!=undefined){
    return true;
  }
  else{
    return false;
  }
  // if(uObj.role=="Admin")//USER LOGGEDIN WITH ADMIN CREDS
  //   return true;
  // else
  //   return false;//ALLOW ACCESS
};
