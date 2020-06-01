import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/cart/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: any = {};
  @Input('ShowAdd') ShowAdd = true;
  @Input('shoppingCart') shoppingCart;
  constructor(private cartServices: ShoppingCartService) { }
  addToCart(product) {
    this.cartServices.addToCart(product);
  }
  removeFromCart(product) {
    this.cartServices.removeFromCart(product);
  }
  getQuantity() {
    if (!this.shoppingCart) return 0;
    const item = this.shoppingCart.items[this.product.key];
    return item ? item.quantiy : 0;
  }
  ngOnInit() {
    console.log(this.product);
  }
}
