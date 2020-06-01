import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/shopping/product.service';
import { CategoryService } from '../services/shopping/category.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../services/cart/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category;
  products = [];
  filteredProducts;
  categories$;
  cart;
  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private cartServices: ShoppingCartService,
    private route: ActivatedRoute) {
    this.cartServices.getCart().valueChanges().subscribe(cart => {
      this.cart = cart;
    })
  }
  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.payload.val().category === this.category) : this.products;
      })
    });
    this.categories$ = this.categoryService.getCategories();
  }
}
