import { BookStoreWebPage } from './app.po';

describe('book-store-web App', function() {
  let page: BookStoreWebPage;

  beforeEach(() => {
    page = new BookStoreWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
