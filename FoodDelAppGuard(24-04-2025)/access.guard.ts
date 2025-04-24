import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strUserData=sessionStorage.getItem('UserData')
  let AllowedRoles:string[]=route.data['roles']//['Admin']
  console.log(AllowedRoles)
  if(strUserData==null)//if UserData not logged then it becomes null
  {
    return false
  }
  //user loggedin
  let uObj:UserInfoNew=JSON.parse(strUserData)//role:Admin
  let SelRol=AllowedRoles.find((val:string)=>val==uObj.role)
  if(SelRol!=undefined)
  {
    return true
  }
  else
  {
    return false
  }
  // if(uObj.role=="ADMIN")//user logged with admin credentials
  // {
  //   return true
  // }
  // else
  // {
  //   return false//not allow access
  // }
  
};
