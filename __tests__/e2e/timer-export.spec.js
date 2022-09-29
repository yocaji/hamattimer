import { test, expect } from '@playwright/test'

test.use({ storageState: './__tests__/e2e/authenticatedState.json' })
test('Gistに保存する', async ({ page, context }) => {
  await page.goto('/timer')
  await page.locator('#preview >> text=GitHubと連携').click()
  await page.waitForNavigation()
  await page.screenshot({ path: 'screenshot.png', fullPage: true })
  if (await page.locator('#js-oauth-authorize-btn').count(1)) {
    await page.locator('#js-oauth-authorize-btn').click()
  }
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('#preview >> button:has-text("Gistに保存する")').click(),
  ])
  await expect(newPage).toHaveURL(/github/)
})
