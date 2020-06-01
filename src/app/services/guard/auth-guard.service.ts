import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  // Router : CanActive : true  : Accessable or false no one can access 
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(router, state: RouterStateSnapshot) {

    return this.auth.user$.pipe(map(user => {
      if (user) return true;
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }))
  }
}
