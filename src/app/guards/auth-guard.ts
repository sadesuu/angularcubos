import { inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  MaybeAsync,
  GuardResult,
} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem('TOKEN')) {
      return true;
    } else {
      return this._router.createUrlTree(['/'], { queryParams: { returnUrl: state.url } });
    }
  }
}

export const authGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): GuardResult => {
  const router = inject(Router);
  return sessionStorage.getItem('TOKEN')
    ? true
    : router.createUrlTree(['/login'], {
        queryParams: { returnUrl: state.url },
      });
};
