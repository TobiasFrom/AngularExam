import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { VirtualTimeScheduler } from 'rxjs';
import { ProductFormActions } from '../admin/product-form/product-form-actions';
import { IAppState } from '../redux/store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

products: Product[] = [];  //Initialize med tomt []... undgå " Cannot read property 'filter' of undefined"
filteredProducts: Product[] = [];

categories$;
category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
    categoryService: CategoryService,
    private productActions: ProductFormActions,
    private ngRedux: NgRedux<IAppState>) {    

    this.productActions.fetch_products();

    this.ngRedux.select(x => x.products).subscribe((state) => {
      this.products = state.products;


      route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
      

      //Filterfunktion:
      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :  // : hvis ikke der er nogle categori, returner' alle produkter.
        this.products; 
    });
  });

    this.categories$ = categoryService.getAll();
    }
  }
