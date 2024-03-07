import { test, expect } from '@playwright/test';

const chosenCategory = 'Action';

// This is needed since initially, all pages had 20 movies but some of them were removed
// because they were repeated.
const minMoviesPerPage = 15;
const maxMoviesPerPage = 20;

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto('/');

  // Click on the "Action" category
  const categoryCard = page.locator('a', { hasText: chosenCategory });
  await categoryCard.click();

  // Check the url has changed
  expect(page.url()).toMatch(new RegExp(`${baseURL}/category/\\d+`));

  // Wait for the title to be visible
  const categoryTitle = page.getByRole('heading', {
    name: `${chosenCategory} Movies`,
    exact: true,
  });

  await expect(categoryTitle).toBeVisible();
});

test('Should display the movies of the chosen category', async ({ page }) => {
  const movies = await page.$$('article');
  expect(movies.length).toBeGreaterThanOrEqual(minMoviesPerPage);
  expect(movies.length).toBeLessThanOrEqual(maxMoviesPerPage);
});

test('Should have infinite scroll', async ({ page }) => {
  // Each category has 3 pages
  const maxScrolls = 2;

  for (let i = 0; i < maxScrolls; i++) {
    // Scroll down
    await page.mouse.wheel(0, 1500);

    // Give some time to load the new movies
    await page.waitForTimeout(500);

    // Re-count the movies
    const currentMovies = await page.$$('article');

    // Assert new movies are displayed
    const newMinExpectedMovies = minMoviesPerPage * (i + 2);
    const newMaxExpectedMovies = maxMoviesPerPage * (i + 2);

    expect(currentMovies.length).toBeGreaterThanOrEqual(newMinExpectedMovies);
    expect(currentMovies.length).toBeLessThanOrEqual(newMaxExpectedMovies);
  }
});
