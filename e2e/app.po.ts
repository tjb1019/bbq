import { browser, by, element } from 'protractor';

export class BbqPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bbq-root h1')).getText();
  }
}
