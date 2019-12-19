import { FilterProduct } from "./product.filter";
import { Product } from 'src/app/models/product';

describe('Product Filter', () => {
  
    it('0.1: Return empty array if array of products is empty while searching on specific value. ', () => {
    // Arrange
      const filter = new FilterProduct() ;
      const data = [];
      const search = 'testSearch';
      const expectedResult = [];
  
    // Act
      const result = filter.transform(data, search);
  
    // Assert (expect)
      expect(result).toEqual(expectedResult);
    });
  
  
    it('1.1: Find products by searching brand', () => {
      
    // Arrange
      const filter = new FilterProduct() ;

      const data = [{title: 'Martins & Co'} as Product];
      const search = 'Martins & Co';
      const expectedResult = data;
  
    // Act
      const result = filter.transform(data, search);
  
    // Assert (expect)
      expect(result).toEqual(expectedResult);
    });
  
    it('1.0: Find products by searching price', () => {
      
    // Arrange
      const filter = new FilterProduct() ;
      
      const data = [
        {_id: 'testId', 
        title: 'Martins & Co', 
        price: 1950, 
        category: 'testCat', 
        imageUrl: 'testImageUrl'
        }];
  
      const search = '1700';
      const expectedResult = data;
  
    // Act
      const result = filter.transform(data, search);
  
    // Assert (expect)
      expect(result).toEqual(expectedResult);
    });
  
    it('2.0: Dont find products when searching for something not in the array', () => {
      
    // Arrange
        const filter = new FilterProduct() ;
      
        const data = [
            {_id: 'testId', 
            title: 'Martins & Co', 
            price: 1950, 
            category: 'testCat', 
            imageUrl: 'testImageUrl'
            }];

        const search = '2000';
        const expectedResult = [];

    // Act
        const result = filter.transform(data, search);

    // Assert (expect)
        expect(result).toEqual(expectedResult);
    });
  
  
    it('2.1: Return all products when search is undefined', () => {
    
    // Arrange
      const filter = new FilterProduct() ;
      
      const data = [
        {_id: 'testId', 
        title: 'Martins & Co', 
        price: 1950, 
        category: 'testCat', 
        imageUrl: 'testImageUrl'
        }];
  
      const search = undefined;
      const expectedResult = data;
  
    // Act
      const result = filter.transform(data, search);
  
    // Assert (expect)
      expect(result).toEqual(expectedResult);
    });
  
    it('2.1: Return all products when search is empty string', () => {
    // Arrange
      const filter = new FilterProduct() ;
      
      const data = [
        {_id: 'testId', 
        title: 'Martins & Co', 
        price: 1950, 
        category: 'testCat', 
        imageUrl: 'testImageUrl'
        }];
  
      const search = '';
      const expectedResult = data;
  
    // Act
      const result = filter.transform(data, search);
  
    // Assert (expect)
      expect(result).toEqual(expectedResult);
    });
  
  
    it('3.0: Search for brand but the data does not contain brand', () => {
      
    // Arrange
      const filter = new FilterProduct() ;
      
      const data = [
        {_id: 'testId', 
        title: 'Martins & Co', 
        price: 1950, 
        category: 'testCat', 
        imageUrl: 'testImageUrl'
        }];
  
      const search = 'noBrand';
      const expectedResult = [];
  
    // Act
      const result = filter.transform(data, search);
  
    // Assert (expect)
      expect(result).toEqual(expectedResult);
    });
  
    it('3.1: Search for a negative price - should return all products (data)', () => {
    // Arrange
      const filter = new FilterProduct() ;
      
      const data = [
        {_id: 'testId', 
        title: 'Martins & Co', 
        price: 1950, 
        category: 'testCat', 
        imageUrl: 'testImageUrl'
        }];
  
      const search = '-2';
      const expectedResult = data;
  
    // Act
      const result = filter.transform(data, search);
  
    // Assert (expect)
      expect(result).toEqual(expectedResult);
    });

   });