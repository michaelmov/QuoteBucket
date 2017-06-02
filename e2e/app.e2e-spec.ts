import { QuoteBucketPage } from './app.po';

describe('quote-bucket App', () => {
  let page: QuoteBucketPage;

  beforeEach(() => {
    page = new QuoteBucketPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
