import { CanActivateFn } from '@angular/router';
import { UserinfoNew } from './userinfo';

export const accessGuard: CanActivateFn = (route, state) => {
 let strUserData= sessionStorage.getItem('UserData');
 let allowedRoles:string[]=route.data['roles'];
 //console.log(route.data)
 if(strUserData==null) //not logged in
 {
  return false;//allow Access....
}
let uObj:UserinfoNew=JSON.parse(strUserData);
let SelRol=allowedRoles.find((val:string)=>val==uObj.role);
if(SelRol!=undefined)
{
  return true;
}
else
{
  return false;
}
}

// if(uObj.role=="Admin") //user logged with admin creds
//   return true;
// else
// return false;//Allow Access
// 
