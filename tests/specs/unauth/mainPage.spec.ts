import { test } from '@playwright/test';
import { MainPage } from '../../pages/MainPage';

test('Открытие главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeMainPageBanner();
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeMainPageBanner();
  await mainPage.categoriesTabsHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeMainPageBanner();
  await mainPage.menuHasCorrectAriaSnapshot();
});
