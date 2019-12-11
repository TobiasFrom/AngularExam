
import { IAppState } from 'src/app/redux/store';
import { ProductService } from 'src/app/product.service';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Product } from 'src/app/models/product';


@Injectable({
    providedIn: 'root'
  })
export class ProductFormActions {

    constructor(private ngRedux: NgRedux<IAppState>, private productService : ProductService){
        
    }

    static CREATE_PRODUCT: string = 'CREATE_PRODUCT';
    static FETCH_PRODUCTS: string = 'FETCH_PRODUCTS';
    static EDIT_PRODUCT: string = 'EDIT_PRODUCT';
    static DELETE_PRODUCT: string = 'DELETE_PRODUCT';

    create_product(product: Product): void {
        let uid =this.productService.create(product);
        product._id = uid.key; 

        console.log(product);
        this.ngRedux.dispatch({
            type: ProductFormActions.CREATE_PRODUCT,
            payload: product
        });
    }
    
    fetch_products(){
        this.productService.getAll().subscribe((products: any[]) => {

            this.ngRedux.dispatch({
            type: ProductFormActions.FETCH_PRODUCTS,
            payload: products
            });    
        });
    }

    edit_product(id: string){
        this.productService.getOnId(id).subscribe((product: Product) => {

        this.ngRedux.dispatch({
            type: ProductFormActions.EDIT_PRODUCT,
            payload: product
        });
    });
    }

    delete_product(id: string){
        this.productService.delete(id)

            this.ngRedux.dispatch({
                type: ProductFormActions.DELETE_PRODUCT,
                payload: id
            });
               
    }
}