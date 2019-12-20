import { browser, element, by, protractor } from 'protractor';

describe('Product tests', () => {
 
   it('Dummy test', () => {
    expect(true).toEqual(true);
  });

  it('Dummy fail test', () => {
    expect(true).toEqual(false);
  });

  it('should create new product', () => {
    browser.ignoreSynchronization = true;
    browser.get('');

    element(by.id('dropdown01')).click();
    browser.sleep(2000)
    element(by.id('dropdownManageProducts')).click();
    browser.sleep(2000)
  
    element.all(by.id('editButton')).then((editButtonsBefore) => {
      const before = editButtonsBefore.length; // eg before = 3
      element(by.id('newProductButton')).click();
      element(by.css('input[formControlName=title]')).sendKeys('e2eTest');
      element(by.css('input[formControlName=price]')).sendKeys(100);
      browser.sleep(2000)
      element(by.id('category')).$('[value="acoustic"]').click();
      browser.sleep(2000)
      element(by.css('input[formControlName=imageUrl]')).sendKeys('https://i2.wp.com/kb.benchmarkemail.com/wp-content/uploads/2011/08/geturlfirefox-double-click.png');
      // browser.sleep(3000);
      element(by.id('saveButton')).click();
      
      // browser.sleep(3000);
      element.all(by.id('editButton')).then((editButtonsAfter) => {
        const after = editButtonsAfter.length; // eg after = 4

        expect(before + 1).toEqual(after);
      });
    });
  });


  it('should delete a product', () => {
    browser.ignoreSynchronization = true;
    element.all(by.id('editButton')).then((editButtonsBefore) => {
      const prodsBefore = editButtonsBefore.length;
      element.all(by.id('editButton')).get(9).click();
      element(by.id('deleteButton')).click();
      browser.switchTo().alert().accept()
      element.all(by.id('editButton')).then((editButtonsAfter) => {
        expect(prodsBefore -1).toEqual(editButtonsAfter.length);
      });
    });
  });


});