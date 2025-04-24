import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './rest-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strUserData=sessionStorage.getItem('userData');
  let AllowedRoles:string[]=route.data['roles'];

  if(strUserData==null){
    return false;
  }
  //user LoggedIn
  let uObj:UserInfoNew=JSON.parse(strUserData);
  let SelROL=AllowedRoles.find((val:string)=>val==uObj.role);
  if(SelROL!=undefined)
  {
    return true;
  }
  else{
    return false;
  }
  //if(uObj.role=='Admin')
  //  return true;
  };
