import { AuthService } from './../auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {


  // 
  constructor(private auth: AuthService) { }
  canActivate() {
    return this.auth.getApp.pipe(map(appuser => appuser.isAdmin));
  }

}
