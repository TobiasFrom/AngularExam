import { browser, element, by, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('Product tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });



  it('1. should login with Google', () => {
    browser.get('');
    browser.sleep(2000)
    element(by.id('loginLink')).click();
    browser.sleep(3000)
    element(by.id('GoogleLoginButton')).click();
    expect(element(by.id('dropdown01')));

  });

  it('should create new product', () => {
    browser.get('');

    element(by.id('dropdown01')).click();
    element(by.id('dropdownManageProducts')).click();
    browser.sleep(1000)

    element.all(by.css('.card-img')).then((el) => {
      const before = el.length; // eg before = 3
      element(by.id('newProductButton')).click();
      element(by.css('input[formControlName=title]')).sendKeys('e2eTest');
      element(by.css('input[formControlName=price]')).sendKeys(100);
      element(by.css('input[formControlName=category]')).sendKeys(protractor.Key.ARROW_DOWN + protractor.Key.ENTER);
      element(by.css('input[formControlName=imageUrl]')).sendKeys('https://i2.wp.com/kb.benchmarkemail.com/wp-content/uploads/2011/08/geturlfirefox-double-click.png');
      // browser.sleep(3000);
      element(by.id('saveButton')).click();
      
      // browser.sleep(3000);
      element.all(by.css('.card-img')).then((el2) => {
        const after = el2.length; // eg after = 4

        expect(before + 1).toEqual(after);
      });
    });
  });
  // expects to be after this test...



  /* it('should delete a lift/trip', () => {
    element.all(by.css('.example-card')).then((elements) => {
      const trips = elements.length;
      element.all(by.css('.delete-button')).get(1).click();
      element.all(by.css('.example-card')).then((elementsAfter) => {
        expect(trips).toEqual(elementsAfter.length + 1);
      });
    });
  }); */


});