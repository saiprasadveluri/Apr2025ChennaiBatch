import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strUserData = sessionStorage.getItem('UserData');
  let AllowedRules = route.data['roles'];
  if(strUserData==null) //Not logged in 
  {
    return false;
  }
  
  let uObj:UserInfoNew = JSON.parse(strUserData); //role:Admin
  let SelRol = AllowedRules.find((val:string)=>val==uObj.role);
  if(SelRol!=undefined)
  {
    return true;
  }
  else
  {
    return false;
  }
  if(uObj.role=='Admin') //User logged in with admin credentials
    return true;
  else
    return false;
};
