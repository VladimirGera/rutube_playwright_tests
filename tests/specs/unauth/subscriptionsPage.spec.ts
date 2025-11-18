import test from '@playwright/test';
import { SubscriptionsPage } from '../../pages/SubscriptionsPage';

test('Проверка доступности контента для неавторизованного пользователя', async ({ page }) => {
  const subscriptionsPage = new SubscriptionsPage(page);
  await subscriptionsPage.open();
  await subscriptionsPage.closeMainPageBanner();
  await subscriptionsPage.closeCookiesAllert();
  await subscriptionsPage.contentHasCorrectAriaSnapshot();
});
