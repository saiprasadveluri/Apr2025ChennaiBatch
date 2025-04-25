import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
const router=inject(Router);
const userRole=localStorage.getItem('userRole')
if(userRole==='host'||userRole==='manager'){
  return true;
}else{
  return false;
  router.navigate(['/']);
}
};
