const deepFreeze = require('deep-freeze');
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestDataRepoService } from '../test-data-repo.service';
import { productsReducer } from './products.reducer';
import { Product } from '../models/product';
import { connect } from 'net';
import { ProductFormActions } from '../admin/product-form/product-form-actions';


describe('Products reducer', () => {

    const ds = new TestDataRepoService();

    it('should return initial state', () => {
    
        //ARRANGE
        const expectedOutput =  {products: [], product: undefined};

        //ACT
        const result = productsReducer(undefined, {undefined});

        //ASSERT
        expect(result).toEqual(expectedOutput);
    });

    it('should create new product, != mutate state', () => {
        
        //ARRANGE
        const product: Product = ds.tempData[0];
        const inputState = {products: [], product: undefined};
        const actionObj = {type: ProductFormActions.CREATE_PRODUCT, payload: product };
        const expectedOutput =  {products: [product], product: undefined};

        deepFreeze(inputState);

        //ACT
        const result = productsReducer(inputState, actionObj);

        //ASSERT
        expect(result).toEqual(expectedOutput);
        
    });


    it('Test if products is added to a non empty array', () =>{
        
        //ARRANGE
        const prod: Product = ds.tempData[0];
        
        const inputState = {products: ds.tempData, product: undefined};
        const actionObj = {type: ProductFormActions.CREATE_PRODUCT, payload: prod};

        deepFreeze(inputState);

        //ACT
        const result = productsReducer(inputState, actionObj);

        //ASSERT
        expect(result.products.length).toEqual(inputState.products.length + 1);

    });

    it('Should delete a product in products', () =>{
        
        //ARRANGE
        const product = {_id: 'testId1'} as Product;

        const inputState =  {products: ds.tempData, product: undefined};

        const actionObj = {type: ProductFormActions.DELETE_PRODUCT, payload: product._id};

        deepFreeze(inputState);
        
        //ACT
        const result = productsReducer(inputState, actionObj);

        //ASSERT
        expect(result.products.length).toEqual(inputState.products.length -1);
    });
});