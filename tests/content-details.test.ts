import { test, expect } from '@playwright/test';

import { getDefaultCredentials } from './utils';

const defaultCredentials = getDefaultCredentials();

// Test constants
const CHOSEN_CATEGORY = 'Action';

test('Authenticated user should see the content details', async ({
  page,
  baseURL,
}) => {
  const MIN_SIMILAR_MOVIES = 9;
  const MAX_SIMILAR_MOVIES = 10;

  await page.goto('/');

  // Log in
  const signInLink = page.getByRole('link', { name: 'Sign In', exact: true });
  await signInLink.click();

  const emailField = page.getByLabel('Email', { exact: true });
  await emailField.fill(defaultCredentials.email);

  const passwordField = page.getByLabel('Password', { exact: true });
  await passwordField.fill(defaultCredentials.password);

  await page.getByRole('button', { name: 'Submit' }).click();

  // Go to the action category
  const firstCategory = page.locator('a', {
    hasText: CHOSEN_CATEGORY,
  });
  await firstCategory.click();
  expect(page.url()).toMatch(new RegExp(`${baseURL}/category/\\d+`));

  // Select the first movie
  const firstMovie = page.locator('li > a > article').first();
  await expect(firstMovie).toBeVisible();

  // Save the movie title
  const movieTitleElement = firstMovie.getByRole('heading');
  await expect(movieTitleElement).toBeVisible();
  const movieTitle = await movieTitleElement.textContent();

  // Go to the movie details
  await firstMovie.click();
  expect(page.url()).toMatch(new RegExp(`${baseURL}/movie/\\d+`));

  // Check the movie details are shown
  const movieTitleInDetails = page.getByRole('heading', { level: 1 });
  await expect(movieTitleInDetails).toHaveText(movieTitle!);

  const movieOverview = page.getByTestId('movie-overview');
  await expect(movieOverview).toBeVisible();

  const movieRating = page.getByTestId('movie-rating');
  await expect(movieRating).toBeVisible();

  // Check the similar movies are shown
  const similarMoviesTitle = page.getByRole('heading', {
    name: 'Similar Movies',
  });
  await expect(similarMoviesTitle).toBeVisible();

  const similarMovies = await page.$$('a > article');
  expect(similarMovies.length).toBeGreaterThan(MIN_SIMILAR_MOVIES);
  expect(similarMovies.length).toBeLessThanOrEqual(MAX_SIMILAR_MOVIES);

  // Check the movie modal is opened when clicking on the "Start Watching" button
  const startWatchingButton = page.getByRole('button', {
    name: 'Start Watching',
  });
  await expect(startWatchingButton).toBeVisible();
  await startWatchingButton.click();

  const movieModal = page.getByRole('dialog');
  await expect(movieModal).toBeVisible();

  const videoPlayer = movieModal.locator('video');
  await expect(videoPlayer).toBeVisible();
  await expect(videoPlayer).toHaveAttribute('controls');
  await expect(videoPlayer).toHaveJSProperty('paused', true);
});

test('Non-authenticated user should be redirected to the login page', async ({
  page,
  baseURL,
}) => {
  await page.goto('/');

  // Go to the action category
  const firstCategory = page.locator('a', {
    hasText: CHOSEN_CATEGORY,
  });
  await firstCategory.click();
  expect(page.url()).toMatch(new RegExp(`${baseURL}/category/\\d+`));

  // Select the first movie
  const firstMovie = page.locator('li > a > article').first();
  await expect(firstMovie).toBeVisible();

  // Check the user can't access the movie details
  await firstMovie.click();

  // Check an alert is shown
  const alert = page
    .locator('div', {
      hasText: 'You need to be logged in to access this page',
    })
    .last();

  await expect(alert).toBeVisible();

  // Check the user is redirected to the login page
  expect(page.url()).toBe(`${baseURL}/login`);
});
