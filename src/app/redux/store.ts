import { Statement } from '@angular/compiler';
import { Product } from '../models/product';
import { productsReducer } from './products.reducer';
import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';


export interface IAppState{
    products?: ProductState;  
}

export class ProductState{
    products: Product[];
    product: Product;
}

export const rootReducer = combineReducers<IAppState>({
    products: productsReducer,
    
    router: routerReducer
    } as any) ;
