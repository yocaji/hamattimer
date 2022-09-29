import { test, expect } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.test.local') })

test.describe('認可済みのstorageStateを.jsonで保存する', () => {

  test('GitHub初回連携', async ({ page }) => {
    test.skip()
    await page.goto('/timer')
    await page.locator('_react=GistAuthMessage >> text=GitHubと連携').click()
    await page.locator('#login_field').fill(process.env.GITHUB_ACCOUNT)
    await page.locator('#password').fill(process.env.GITHUB_PW)
    await page.locator('input[type=submit]').click()
    if (await page.locator('#js-oauth-authorize-btn').count(1)) {
      await page.locator('#js-oauth-authorize-btn').click()
    }
    await page.waitForNavigation()

    await page.context().storageState({ path: 'authenticatedState.json' })
  })

})

test.describe('GitHub連携', () => {

  test.use({ storageState: './__tests__/e2e/authenticatedState.json' })
  test('GitHub連携・連携解除', async ({ page }) => {
    await page.goto('/timer')
    await page.locator('#preview >> text=GitHubと連携').click()
    await page.waitForNavigation()
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    if (await page.locator('#js-oauth-authorize-btn').count(1)) {
      await page.locator('#js-oauth-authorize-btn').click()
      await page.waitForNavigation()
    }
    await expect(page.locator('#preview >> text=GitHubと連携')).toBeHidden()
    await expect(page.locator('#gist-button')).toBeEnabled()
    await expect(page.locator('footer >> text=GitHub連携解除')).toBeVisible()

    await page.locator('footer >> text=GitHub連携解除').click()
    await page.waitForNavigation()
    await expect(page.locator('#preview >> text=GitHubと連携')).toBeVisible()
    await expect(page.locator('#preview >> button:has-text("Gistに保存する")')).toBeDisabled()
    await expect(page.locator('footer >> text=GitHub連携解除')).toBeHidden()
  })

})
