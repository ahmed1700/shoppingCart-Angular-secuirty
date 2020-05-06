import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent {
  appUser;
  constructor(public auth: AuthService) {
    this.auth.getApp.subscribe(user => {
      console.log(user);
      this.appUser = user;
    })
  }

  logOut() {
    this.auth.logOut();
  }
}
