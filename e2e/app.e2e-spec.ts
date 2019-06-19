import { Cloud.TargetPage } from './app.po';

describe('cloud.target App', () => {
  let page: Cloud.TargetPage;

  beforeEach(() => {
    page = new Cloud.TargetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
