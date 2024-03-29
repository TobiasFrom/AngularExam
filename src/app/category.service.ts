import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  

  constructor(private db: AngularFireDatabase) { }

  // Sorterer
  getAll() 
  {
    return this.db.list('/categories', {
      query: {
        orderByChild: 'name'
      }
    });
  }
}


