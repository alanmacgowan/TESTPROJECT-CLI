import { TESTPROJECTCLIPage } from './app.po';

describe('testproject-cli App', () => {
  let page: TESTPROJECTCLIPage;

  beforeEach(() => {
    page = new TESTPROJECTCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
