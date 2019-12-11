import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({name: 'filterProduct'})
@Injectable()
export class FilterProduct implements PipeTransform {

  transform(items: Product[], search: any): any {

    console.log(search);
    console.log(items);

    if (search === undefined) {
      return items;
    }

    search = search.toLowerCase();
    return items.filter(p => 
                        p.title && p.title.toLowerCase().includes(search) 
                        || p.price && p.price >= search);
  }
}