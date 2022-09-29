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

  await page.locator('_react=StartButton').click()
  await expect(page.locator('_react=ControlButton')).toBeEnabled()
  await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:01')
  await expect(page.locator('_react=Trials')).toBeVisible()
  await expect(page.locator('_react=Trial >> textarea[name=guess]')).toHaveValue('')
  await expect(page.locator('_react=Trial >> textarea[name=operation]')).toHaveValue('')
  await expect(page.locator('_react=Trial >> textarea[name=result]')).toHaveValue('')
  await expect(page.locator('_react=EditorFooter >> text=解決した！')).toBeVisible()
  await expect(page.locator('_react=EditorFooter >> text=終了する')).toBeVisible()
  await expect(page.locator('_react=Preview >> h2')).toHaveText(['解決したいこと', '試したこと その1'])
})

test('ストップウォッチ', async ({ page }) => {
  await page.goto('/timer')

  await page.locator('_react=StartButton').click()
  await expect(page.locator('_react=ControlButton')).toBeEnabled()
  await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:01')

  await page.locator('_react=ControlButton').click()
  await page.waitForTimeout(1000)
  await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:01')

  const localStorage = (await page.context().storageState()).origins[0].localStorage
  const stopwatch = localStorage.filter((item) => item.name === 'stopwatch')[0].value
  const seconds = JSON.parse(stopwatch).seconds
  expect(seconds).toBe(1)
})

test('リセットボタン', async ({ page }) => {
  await page.goto('/timer')
  await page.locator('_react=StartButton').click()
  await page.locator('_react=Issue >> input[name=tobe]').fill('解決したいことテスト１')

  await expect(page.locator('_react=ControlButton')).toBeEnabled()
  await expect(page.locator('_react=Preview >> text=解決したいことテスト１')).toBeVisible()
  await expect(page.locator('_react=Trials')).toBeVisible()

  await page.locator('#reset-all').click()
  await page.locator('text=リセットする').click()

  await expect(page.locator('_react=ControlButton')).toBeDisabled()
  await expect(page.locator('_react=Preview >> text=解決したいことテスト１')).toBeHidden()
  await expect(page.locator('_react=Trials')).toBeHidden()
})

test('解決したボタン', async ({ page }) => {
  await page.goto('/timer')
  await page.locator('_react=StartButton').click()
  await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:01')

  await page.locator('button:has-text("解決した")').click()
  await page.locator('#modal-solved button:has-text("閉じる")').click()
  await page.waitForTimeout(1000)
  await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:01')
})

test('終了するボタン', async ({ page }) => {
  await page.goto('/timer')
  await page.locator('_react=StartButton').click()
  await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:01')

  await page.locator('button:has-text("終了する")').click()
  await page.locator('#modal-stopped button:has-text("閉じる")').click()
  await page.waitForTimeout(1000)
  await expect(page.locator('#stopwatch-counter')).toHaveText('0:00:01')
})

test('解決したいことのプレビュー', async ({ page }) => {
  await page.goto('/timer')

  await page.locator('_react=Issue >> input[name=tobe]').fill('解決したいことテスト１')
  await page.locator('_react=Issue >> input[name=asis]').fill('解決したいことテスト２')
  await page.locator('_react=Issue >> textarea[name=problem]').fill('解決したいことテスト３')

  await expect(page.locator('_react=Preview >> text=解決したいことテスト１')).toBeVisible()
  await expect(page.locator('_react=Preview >> text=解決したいことテスト２')).toBeVisible()
  await expect(page.locator('_react=Preview >> text=解決したいことテスト３')).toBeVisible()
})

test('試したことのプレビュー', async ({ page }) => {
  await page.goto('/timer')
  await page.locator('_react=StartButton').click()

  await page.locator('_react=Trial >> textarea[name=guess]').fill('試したことテスト１')
  await page.locator('_react=Trial >> textarea[name=operation]').fill('試したことテスト２')
  await page.locator('_react=Trial >> textarea[name=result]').fill('試したことテスト３')

  await expect(page.locator('_react=Preview >> text=試したことテスト１')).toBeVisible()
  await expect(page.locator('_react=Preview >> text=試したことテスト２')).toBeVisible()
  await expect(page.locator('_react=Preview >> text=試したことテスト３')).toBeVisible()
})

test('試したことの追加・削除', async ({ page }) => {
  await page.goto('/timer')

  await page.locator('_react=StartButton').click()
  await page.locator('_react=Trials >> text=追加する').click()
  await expect(page.locator('_react=Trial')).toHaveCount(4)

  await page.locator('#remove-trial').first().click()
  await expect(page.locator('_react=Trial')).toHaveCount(2)
})

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

test('Markdown形式でコピー', async ({ browser }) => {
  const context = await browser.newContext()
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: process.env.NEXTAUTH_URL})
  await context.grantPermissions(['clipboard-read'])
  await context.grantPermissions(['clipboard-write'])
  const page = await context.newPage()

  await page.goto('/timer')
  await page.locator('_react=CopyButton').click()
  await page.context().storageState({ path: 'clipboard.json' })
  const text = await page.clipboard.read()
  await expect.soft(text).toBe(/fail/)
  await context.clearPermissions()
})
