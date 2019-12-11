import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  login() {
    element(by.id(''))

    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
