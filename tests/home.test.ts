import { expect, test } from '@playwright/test';

test('Should have 5 cards with categories', async ({ page }) => {
  await page.goto('/');

  // Should have an accessible title
  const categoriesTitle = page.getByRole('heading', {
    name: 'Categories',
    exact: true,
  });
  await expect(categoriesTitle).toBeVisible();

  // Should have 5 cards
  const enabledCategories = [
    'Action',
    'Comedy',
    'Animation',
    'History',
    'Adventure',
  ];

  for (const category of enabledCategories) {
    const categoryCard = page.locator('a', { hasText: category });
    await categoryCard.scrollIntoViewIfNeeded();
    await expect(categoryCard).toBeVisible();
  }
});
