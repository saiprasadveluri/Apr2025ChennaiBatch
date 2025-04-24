import { CanActivateFn } from '@angular/router';
import { UserInfoNow } from './userinfo';

export const accessGuard: CanActivateFn = (route, state) => {
  // return true; //allow access to url
  let strUserdata=sessionStorage.getItem('Userdata');
  let AllowedRoles:string[]=route.data['roles']; //['admin]
 
    if(strUserdata==null){
    return false;
  }
  //user loggedin
 
  let uObj:UserInfoNow=JSON.parse(strUserdata); //role:admin
  let SelRol=AllowedRoles.find((val:string)=>val==uObj.role);
  
  if(SelRol!=undefined)
  {
    return true;
  }
  else
  {
    return false;
  }
}
