export class CrudPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('crud-app h1')).getText();
  }
}
