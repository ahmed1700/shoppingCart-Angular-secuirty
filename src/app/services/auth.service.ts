import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private auth: AngularFireAuth) {
    this.user$ = this.auth.authState;
  }
  login() {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  logOut() {
    this.auth.signOut();
  }
}
