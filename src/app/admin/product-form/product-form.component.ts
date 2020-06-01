import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/shopping/category.service';
import { ProductService } from 'src/app/services/shopping/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: any = {};
  categories$;
  id = '';
  constructor(private categoryService: CategoryService,
    private productSvr: ProductService,
    private router: Router,
    private actvRouter: ActivatedRoute) {
    this.id = this.actvRouter.snapshot.paramMap.get('id');
    if (this.id) {
      this.productSvr.getProductById(this.id).subscribe(product => {
        this.product = product
      })
    }
    this.categories$ = this.categoryService.getCategories();
  }
  ngOnInit(): void {
  }
  save(product) {
    if (this.id) {
      this.productSvr.update(this.id, product);
    }
    else {
      this.productSvr.create(product);
    }

    this.router.navigate(['/admin/products'])
  }
}
