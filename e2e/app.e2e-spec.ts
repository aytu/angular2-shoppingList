import { Angular2ShopAppPage } from './app.po';

describe('angular2-shop-app App', function() {
  let page: Angular2ShopAppPage;

  beforeEach(() => {
    page = new Angular2ShopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
