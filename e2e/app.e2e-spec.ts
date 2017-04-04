import { Ng2ForecastPage } from './app.po';

describe('ng2-forecast App', () => {
  let page: Ng2ForecastPage;

  beforeEach(() => {
    page = new Ng2ForecastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fc works!');
  });
});
