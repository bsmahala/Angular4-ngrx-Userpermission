import { LocalityAppPage } from './app.po';

describe('locality-app App', () => {
  let page: LocalityAppPage;

  beforeEach(() => {
    page = new LocalityAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
