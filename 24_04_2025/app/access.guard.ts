import { CanActivateFn } from '@angular/router';
import { UserInfoNew } from './user-info';

export const accessGuard: CanActivateFn = (route, state) => {
  let strd = sessionStorage.getItem('UserData');
  let al: string[] = route.data['roles'];
  if (strd == null) {
    return false;
  }
  let u: UserInfoNew = JSON.parse(strd);
  let selid = al.find((val: string)=>{
    return val == u.role
  });
  if (selid != undefined) {
    return true;
  }
  else {
    return false
  }
  // return true;
};
