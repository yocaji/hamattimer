import { test, expect } from '@playwright/test'

test('Test with playwright', async ({ page }) => {
	await page.goto('/timer')
	const title = await page.innerText('h1')
	await expect(title).toBe('はまったいまー')
})
