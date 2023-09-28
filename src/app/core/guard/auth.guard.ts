import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

const router = inject(Router)
const authService = inject(AuthService)

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  if(authService.isAuthenticated()){
    router.navigate(['']);
    return false;
  }
  return true;
};
