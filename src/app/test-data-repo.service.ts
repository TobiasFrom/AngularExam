import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class TestDataRepoService {

  tempData: Product[] = [
    {_id: 'testId1', 
    title: 'Martins & Co1', 
    price: 1951, 
    category: 'testCat1', 
    imageUrl: 'testImageUrl1'} as Product,

    {_id: 'testId2', 
    title: 'Martins & Co2', 
    price: 1952, 
    category: 'testCat2', 
    imageUrl: 'testImageUrl2'} as Product,

    {_id: 'testId3', 
    title: 'Martins & Co3', 
    price: 1953, 
    category: 'testCat3', 
    imageUrl: 'testImageUrl3'} as Product
  ];

  constructor() { }

}
