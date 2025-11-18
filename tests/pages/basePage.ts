import { expect, Locator, Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;
  readonly mainPageBanner: Locator;
  readonly closerMainPageBanner: Locator;
  readonly bannerVPN: Locator;
  readonly closerBannerVPN: Locator;
  constructor(page: Page) {
    this.page = page;
    this.mainPageBanner = this.page.locator('.wdp-popup-module__header');
    this.closerMainPageBanner = this.page.getByRole('button', { name: 'Закрыть', exact: true });
    this.bannerVPN = this.page.locator(
      '.bottom-bar-components-module__bottomBar application-module__desktopBottomBar',
    );
    this.closerBannerVPN = this.page.locator('.message-module__closeButton');
  }

  async closeMainPageBanner() {
    if (await this.mainPageBanner.isVisible().catch(() => false)) {
      await this.closerMainPageBanner.click();
    }
  }

  async closeBannerVPN() {
    if (await this.bannerVPN.isVisible().catch(() => false)) {
      await this.closerBannerVPN.click();
    }
  }

  async closeCookiesAllert() {
    await this.page.getByLabel('Уведомление об использовании').locator('button').click();
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }

  protected async checkLayoutByScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toHaveScreenshot(screenshotName, {
      timeout: 15000,
    });
  }
  async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const header = document.querySelector(selector);
      if (header) {
        (header as HTMLElement).style.display = 'none';
      }
    }, selector);
  }
}
