import { test, expect } from '@playwright/test';

import { getDefaultCredentials } from './utils';

const defaultCredentials = getDefaultCredentials();
const CHOSEN_CATEGORY = 'Action';

test('Authenticated user should be able to add a movie to favorites', async ({
  page,
  baseURL,
}) => {
  await page.goto('/');

  // Test constants
  const EMPTY_STATE_TITLE = "You don't have any favorite movies yet";

  // Log in
  const signInLink = page.getByRole('link', { name: 'Sign In', exact: true });
  await signInLink.click();

  const emailField = page.getByLabel('Email', { exact: true });
  await emailField.fill(defaultCredentials.email);

  const passwordField = page.getByLabel('Password', { exact: true });
  await passwordField.fill(defaultCredentials.password);

  await page.getByRole('button', { name: 'Submit' }).click();

  // Go to the favorites page
  const favoritesLink = page.getByRole('link', {
    name: 'Favorites',
    exact: true,
  });
  await favoritesLink.click();
  expect(page.url()).toMatch(new RegExp(`${baseURL}/favorites`));

  // Check the empty state
  let emptyStateTitle = page.getByRole('heading', {
    name: EMPTY_STATE_TITLE,
  });
  await expect(emptyStateTitle).toBeVisible();

  // Go back to the home page
  const homeLink = page.getByRole('link', { name: 'Home', exact: true });
  await homeLink.click();
  expect(page.url()).toBe(`${baseURL}/`);

  // Go to the action category
  const actionCategory = page.locator('a', { hasText: CHOSEN_CATEGORY });
  await actionCategory.click();
  expect(page.url()).toMatch(new RegExp(`${baseURL}/category/\\d+`));

  // Select the first movie
  const firstMovie = page.locator('a > article').first();
  await expect(firstMovie).toBeVisible();

  // Keep the movie title
  const movieTitleElement = firstMovie.getByRole('heading');
  await expect(movieTitleElement).toBeVisible();
  const movieTitle = await movieTitleElement.textContent();

  // Click on the button to add the movie to favorites
  const favoriteButton = firstMovie.getByLabel(
    `Add ${movieTitle} to favorites`,
  );
  await expect(favoriteButton).toBeVisible();
  await favoriteButton.click();

  // Go to the favorites page
  await favoritesLink.click();

  // Check the movie is in the favorites
  const favorites = await page.$$('a > article');
  expect(favorites.length).toBe(1);

  const favoriteCard = page.locator('a > article').first();
  const favoriteTitleElement = favoriteCard.getByRole('heading');
  await expect(favoriteTitleElement).toHaveText(movieTitle!);

  // Remove the movie from favorites
  const removeButton = favoriteCard.getByLabel(
    `Remove ${movieTitle} from favorites`,
  );
  await removeButton.click();

  // Check the empty state
  emptyStateTitle = page.getByRole('heading', {
    name: EMPTY_STATE_TITLE,
  });

  await expect(emptyStateTitle).toBeVisible();
});
