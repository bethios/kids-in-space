import { SpaceAppPage } from './app.po';

describe('space-app App', () => {
  let page: SpaceAppPage;

  beforeEach(() => {
    page = new SpaceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
