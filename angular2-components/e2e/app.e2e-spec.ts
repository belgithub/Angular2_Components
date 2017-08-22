import { Angular2ComponentsPage } from './app.po';

describe('angular2-components App', () => {
  let page: Angular2ComponentsPage;

  beforeEach(() => {
    page = new Angular2ComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
