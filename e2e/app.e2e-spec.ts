import { BbqPage } from './app.po';

describe('bbq App', () => {
  let page: BbqPage;

  beforeEach(() => {
    page = new BbqPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to bbq!');
  });
});
