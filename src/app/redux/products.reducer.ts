import { ProductState } from './store';
import { tassign } from 'tassign';

import { ProductFormActions } from '../admin/product-form/product-form-actions';
import { Product } from '../models/product';

const INITIAL_STATE: ProductState = {products: [], product: undefined};

export function productsReducer(state: ProductState = INITIAL_STATE, action: any){
    switch(action.type) {

        case ProductFormActions.FETCH_PRODUCTS:
            return tassign(state, {products: action.payload});

        case ProductFormActions.CREATE_PRODUCT:
            const newProds = [...state.products, action.payload];
            return tassign(state, {products: newProds})
            
        case ProductFormActions.EDIT_PRODUCT:
            return tassign(state, {product: action.payload});

        case ProductFormActions.EDIT_PRODUCT_POST:
            return tassign(state, {product: action.payload});    

        case ProductFormActions.DELETE_PRODUCT:
            const afterDeleteProds: Product[] = 
                state.products.filter(prod => prod._id !== action.payload);
            return tassign(state, {products: afterDeleteProds});    

    default:
            return state;        
    }

}