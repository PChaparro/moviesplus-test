import { test, expect } from '@playwright/test';

test('Should have a basic navbar for non-authenticated users', async ({
  page,
  baseURL,
}) => {
  await page.goto('/');

  // Check the navbar is shown
  const navbar = page.getByRole('navigation');
  await expect(navbar).toBeVisible();

  // Check the navbar has the correct links
  const links = [
    {
      label: 'Go to home page',
      expectedPath: '/',
    },
    {
      label: 'Home',
      expectedPath: '/',
    },
    {
      label: 'Sign In',
      expectedPath: '/login',
    },
  ];

  for (const linkText of links) {
    const { label, expectedPath } = linkText;

    // Check the link is visible
    const linkElement = page.getByRole('link', { name: label, exact: true });
    await expect(linkElement).toBeVisible();

    // Check the link redirects to the correct page
    await linkElement.click();
    expect(page.url()).toBe(`${baseURL}${expectedPath}`);
  }
});
