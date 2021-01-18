import { Injectable }                                                                from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable }                                                                from 'rxjs';
import { AuthModel }                                                                 from '../models/auth.mode';;

@Injectable( {
  providedIn: 'root'
} )
export class TokenRequiredGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = AuthModel.loadCache()?.accessToken || null;
    if ( token == null ) {
      this.router.navigate( [ 'login' ] ).then();
      return false;
    }
    return true;
  }

}
