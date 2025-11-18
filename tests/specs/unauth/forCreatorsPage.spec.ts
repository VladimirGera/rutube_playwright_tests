import test from '@playwright/test';
import { ForCreatorPage } from '../../pages/ForCreatorsPage';

ForCreatorPage.testsParams.forEach(({ url, screenshotName, name }) => {
  test(`Проверка layout ${name}`, async ({ page }) => {
    const forCreatorsPage = new ForCreatorPage(page);
    await forCreatorsPage.open(url);
    await forCreatorsPage.pageHasCorrectLayout(screenshotName);
  });
});
