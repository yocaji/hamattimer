import { test, expect } from '@playwright/test';

test('初期表示', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=こんな経験はないですか？')).toBeVisible();
});
