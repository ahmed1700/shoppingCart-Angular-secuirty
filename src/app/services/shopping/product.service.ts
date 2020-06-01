import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  // Add
  create(product) {
    return this.db.list('/products').push(product);
  }
  // Get
  getAll() {
    return this.db.list('/products').snapshotChanges();
  }
  getProductById(porductId: string) {
    return this.db.object('/products/' + porductId).snapshotChanges();
  }
  update(porductId: string, product) {
    return this.db.object('/products/' + porductId).update(product);
  }
  delete(porductId: string) {
    return this.db.object('/products/' + porductId).remove();
  }
}
