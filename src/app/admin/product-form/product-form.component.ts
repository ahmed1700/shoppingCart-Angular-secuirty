import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/shopping/category.service';
import { ProductService } from 'src/app/services/shopping/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: any = {};
  categories$;
  constructor(private categoryService: CategoryService, private productSvr: ProductService, private router: Router) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit(): void {
  }
  save(product) {
    this.productSvr.create(product);
    this.router.navigate(['/admin/products'])
  }
}
