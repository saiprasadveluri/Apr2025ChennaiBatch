import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
 let  strUserData=sessionStorage.getItem('UserData');
 let AllowedRoles=route.data['role'];
 if(strUserData==null){
return false;
 }

//user logged in
 let uObj:UserInfoNew=JSON.parse(strUserData);
 let SelRoll=AllowedRoles.find((val:string)=>val==uObj.role);
 if(SelRoll=undefined){
  return true;
 }
 else{
  return false;//alllow access....
 }

 
};
