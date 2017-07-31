import { JabberPage } from './app.po';

describe('jabber App', () => {
  let page: JabberPage;

  beforeEach(() => {
    page = new JabberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
