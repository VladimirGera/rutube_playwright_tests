import { test, expect } from '../../fixtures/fixtures';
import { CategoriesPage } from '../../pages/CategoriesPage';

test('Проверка лайаута', async ({ categoriesPage }) => {
  await categoriesPage.contentPageHasCorrectLayout();
});
