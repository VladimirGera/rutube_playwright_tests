import { Locator, Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;
  readonly mainPageBanner: Locator;
  readonly closerMainPageBanner: Locator;
  constructor(page: Page) {
    this.page = page;
    this.mainPageBanner = this.page.locator('.wdp-popup-module__header');
    this.closerMainPageBanner = this.page.getByRole('button', { name: 'Закрыть', exact: true });
  }

  async closeMainPageBanner() {
    if (this.mainPageBanner) {
      await this.closerMainPageBanner.click();
    }
  }
}
