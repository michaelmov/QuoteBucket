import { QuoteBucktPage } from './app.po';

describe('quote-buckt App', () => {
  let page: QuoteBucktPage;

  beforeEach(() => {
    page = new QuoteBucktPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
