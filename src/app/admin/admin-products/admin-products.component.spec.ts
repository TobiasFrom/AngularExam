// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdminProductsComponent } from './admin-products.component';
// import { Product } from 'src/app/models/product';

// const testData = [
//   {_id: 'testId1', 
//   title: 'Martins & Co1', 
//   price: 1951, 
//   category: 'testCat1', 
//   imageUrl: 'testImageUrl1'} as Product,

//   {_id: 'testId2', 
//   title: 'Martins & Co2', 
//   price: 1952, 
//   category: 'testCat2', 
//   imageUrl: 'testImageUrl2'} as Product,

//   {_id: 'testId3', 
//   title: 'Martins & Co3', 
//   price: 1953, 
//   category: 'testCat3', 
//   imageUrl: 'testImageUrl3'} as Product
// ];

// describe("Admin product Filter", () => {
//   let fixture: ComponentFixture<AdminProductsComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [AdminProductsComponent]
//     });
//   });

//   it('0.1: Return empty array if array of procucts is empty while searching on specific value. ', () => {
//     // Arrange
//     let component: AdminProductsComponent;
//     const search = 'shouldReturnEmptyArray';
//     const expectedResult = [];

//     // Act
//     const result = component.filter(search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });





//   it("1.0 Find product by searching category", () => {

//     let component: AdminProductsComponent;
//     const data = testData[0];
//     const searchString = "testCat1";

//     const expectedResult = [
//       {_id: 'testId1', 
//       title: 'Martins & Co1', 
//       price: 1951, 
//       category: 'testCat1', 
//       imageUrl: 'testImageUrl1'} as Product,
//     ];

//     //Act: We want to search for destination = Gentofte
//     const result = component.filter(searchString);

//     //Assert: We want it to be equal to expected result.
//     expect(result).toEqual(expectedResult);
//   });

// });
