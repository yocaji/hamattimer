import { test, expect } from '@playwright/test'

test('初回アクセス', async ({ page }) => {
	await page.goto('/timer')

	await expect(page.locator('_react=ControlButton')).toBeDisabled()
	await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:00')
	await expect(page.locator('_react=SelectLimit >> select')).toHaveValue('30')
	await expect(page.locator('_react=Issue >> input[name=tobe]')).toHaveValue('')
	await expect(page.locator('_react=Issue >> input[name=asis]')).toHaveValue('')
	await expect(page.locator('_react=Issue >> textarea[name=problem]')).toHaveValue('')
	await expect(page.locator('_react=StartButton')).toBeVisible()
	await expect(page.locator('_react=GistButton')).toBeDisabled()
	await expect(page.locator('_react=Preview >> h2')).toHaveText(['解決したいこと'])
	await expect(page.locator('_react=Preview >> text=\'試したこと その1\'')).toBeHidden()
	await expect(page.locator('_react=SignOutLink')).toBeHidden()
	await expect(page.locator('_react=Trials')).toBeHidden()
})

test('スタートボタン', async ({ page }) => {
	await page.goto('/timer')
	const title = await page.innerText('h1')
	await expect(title).toBe('はまったいまー')
})
