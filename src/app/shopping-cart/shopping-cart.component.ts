import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: any[] = [];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getCart().valueChanges().subscribe((cart: any) => {
      for (const productKey in cart.items) {
        this.cartProducts.push(cart.items[productKey])
      }
    });
    console.log(this.cartProducts);
  }

}
