import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) {}

  create(product){
    return this.db.list('/products').push(product);
  }

  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }

  getAll(): Observable<Product[]> {
    return this.db.list('/products');
  }

  getOnId(productId: string){
    return this.db.object('/products/' + productId);
  }

  delete(productId: string){
    return this.db.object('/products/' + productId).remove();
  }
}
