import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/cart/shopping-cart.service';
@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {
  appUser;
  shoppingCartCounter;
  constructor(public auth: AuthService, private shoppingCartService: ShoppingCartService) {
    this.auth.getApp.subscribe(user => {
      console.log(user);
      this.appUser = user;
    })
  }
  ngOnInit() {
    this.shoppingCartService.getCart().valueChanges().subscribe((cart: any) => {
      this.shoppingCartCounter = 0;
      for (const productKey in cart.items) {
        this.shoppingCartCounter += cart.items[productKey].quantiy;
      }
    });
  }
  logOut() {
    this.auth.logOut();
  }
}
