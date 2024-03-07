import { test, expect } from '@playwright/test';

const expectedUser = {
  email: 'user@bemaster.com',
  password: 'password123',
};

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto('/');

  const signInLink = page.getByRole('link', { name: 'Sign In', exact: true });
  await signInLink.click();

  // Check the page is redirected to the login page
  expect(page.url()).toBe(`${baseURL}/login`);
});

test('Should validate email and password fields', async ({ page }) => {
  // Check the email and password fields are present
  const emailField = page.getByLabel('Email', { exact: true });
  await expect(emailField).toBeVisible();

  const passwordField = page.getByLabel('Password', { exact: true });
  await expect(passwordField).toBeVisible();

  // Check the email and password fields are required
  await page.getByRole('button', { name: 'Submit' }).click();

  const emptyEmailError = page.getByText('Please enter your email', {
    exact: true,
  });
  await expect(emptyEmailError).toBeVisible();

  const emptyPasswordError = page.getByText('Please enter your password', {
    exact: true,
  });
  await expect(emptyPasswordError).toBeVisible();

  // Check the email field is validated
  await emailField.fill('BeMaster');
  await page.getByRole('button', { name: 'Submit' }).click();

  const invalidEmailError = page.getByText('Please enter a valid email', {
    exact: true,
  });
  await expect(invalidEmailError).toBeVisible();
});

test('Should show an alert when the login fails', async ({ page }) => {
  const wrongEmail = 'wrong@bemaster.com';
  const wrongPassword = 'wrongpassword123';

  // Fill the form with wrong credentials
  await page.getByLabel('Email', { exact: true }).fill(wrongEmail);
  await page.getByLabel('Password', { exact: true }).fill(wrongPassword);
  await page.getByRole('button', { name: 'Submit' }).click();

  // Check the alert is shown
  const alert = page.getByText('Wrong credentials', {
    exact: true,
  });

  await expect(alert).toBeVisible();
});

test.describe.serial('User should be able to login', () => {
  test.beforeEach(async ({ page }) => {
    const { email, password } = expectedUser;

    // Fill the form with the expected user credentials
    await page.getByLabel('Email', { exact: true }).fill(email);
    await page.getByLabel('Password', { exact: true }).fill(password);
    await page.getByRole('button', { name: 'Submit' }).click();
  });

  test('Should show an alert and redirect to the home page', async ({
    page,
    baseURL,
  }) => {
    // Check an alert is shown
    const alert = page.getByText('You have successfully logged in', {
      exact: true,
    });

    await expect(alert).toBeVisible();

    // Check the page is redirected to the home page
    expect(page.url()).toBe(`${baseURL}/`);
  });

  test('Should update the navbar', async ({ page, baseURL }) => {
    const expectedLinks = [
      {
        label: 'Go to home page',
        expectedPath: '/',
      },
      {
        label: 'Favorites',
        expectedPath: '/favorites',
      },
      {
        label: 'Watchlist',
        expectedPath: '/watchlist',
      },
      {
        label: 'Home',
        expectedPath: '/',
      },
    ];

    for (const expectedLink of expectedLinks) {
      const { label: expectedLabel, expectedPath } = expectedLink;

      // Check the link is visible
      const linkElement = page.getByRole('link', {
        name: expectedLabel,
        exact: true,
      });

      await expect(linkElement).toBeVisible();

      // Check the link redirects to the correct page
      await linkElement.click();
      expect(page.url()).toBe(`${baseURL}${expectedPath}`);
    }

    // Check user profile picture is shown
    const profilePicture = page.getByRole('img', { name: 'bemaster profile' });
    await expect(profilePicture).toBeVisible();

    // Check the logout button is shown
    const logoutButton = page.getByRole('button', { name: 'Logout' });
    await expect(logoutButton).toBeVisible();
  });
});
