import { test, expect } from '@playwright/test'

test('GitHub連携・連携解除', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'authenticatedState.json' })
  const page = await context.newPage()

  await page.goto('/timer')
  await page.locator('_react=GistAuthMessage >> text=GitHubと連携').click()
  await page.waitForNavigation()

  await expect(page.locator('_react=GistAuthMessage')).toBeHidden()
  await expect(page.locator('_react=GistButton')).toBeDisabled()
  await expect(page.locator('_react=SignOutLink')).toBeVisible()

  await page.locator('_react=SignOutLink').click()
  await page.waitForNavigation()
  await expect(page.locator('_react=GistAuthMessage')).toBeVisible()
  await expect(page.locator('_react=GistButton')).toBeEnabled()
  await expect(page.locator('_react=SignOutLink')).toBeHidden()
})

test('Gistに保存する', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'authenticatedState.json' })
  const page = await context.newPage()

  await page.goto('/timer')
  await page.locator('_react=GistAuthMessage >> text=GitHubと連携').click()
  await page.waitForNavigation()
  await page.screenshot({ path: 'screenshot.png', fullPage: true })
  // await page.locator('#js-oauth-authorize-btn').click()
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('_react=GistButton').click(),
  ])
  await expect(newPage).toHaveURL(/github/)
})
