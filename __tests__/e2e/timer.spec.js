import { test, expect } from '@playwright/test'

test.describe('コントロール', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/timer')
  })

  test('初期表示', async ({ page }) => {
    await expect(page.locator('data-testid=timer-desktop >> select')).toHaveValue('30')
    await expect(page.locator('data-testid=timer-desktop >> button:has-text("スタート")')).toBeVisible()
    await expect(page.locator('.notification')).toBeVisible()
  })

  test('スタート', async ({ page }) => {
    await page.locator('data-testid=timer-desktop >> button:has-text("スタート")').click()
    await expect(page.locator('.notification')).toBeHidden()
    await expect(page.locator('data-testid=timer-desktop >> button:has-text("スタート")')).toBeHidden()
    await expect(page.locator('data-testid=timer-desktop >> data-testid=counter')).toHaveText('0:2959')
  })

  test('一時停止', async ({ page }) => {
    await page.locator('data-testid=timer-desktop >> button:has-text("スタート")').click()
    await page.waitForTimeout(1000)
    const count = await page.locator('data-testid=timer-desktop >> data-testid=counter').innerText()

    await page.locator('data-testid=timer-desktop >> button').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('data-testid=timer-desktop >> data-testid=counter')).toHaveText(count)
  })

  test('解決したボタン', async ({ page }) => {
    await page.locator('data-testid=timer-desktop >> button:has-text("スタート")').click()
    await page.waitForTimeout(1000)
    const count = await page.locator('data-testid=timer-desktop >> data-testid=counter').innerText()

    await page.locator('[data-testid=navbar-desktop] button:has-text("解決した！")').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('data-testid=timer-desktop >> data-testid=counter')).toHaveText(count)
  })

  test('リセットボタン', async ({ page }) => {
    await page.locator('data-testid=timer-desktop >> button:has-text("スタート")').click()
    await expect(page.locator('data-testid=timer-desktop >> data-testid=counter')).toHaveText('0:2959')

    await page.locator('data-testid=issue >> input[name=tobe]').fill('解決したいことテスト１')
    await page.locator('data-testid=trials >> textarea[name=guess]').fill('試したことテスト１')
    await page.locator('data-testid=trials >> button:has-text("試したこと")').click()

    await expect(page.locator('#preview >> text=解決したいことテスト１')).toBeVisible()
    await expect(page.locator('#preview >> text=試したことテスト１')).toBeVisible()
    await expect(page.locator('data-testid=trials >> .box')).toHaveCount(2)

    await page.locator('[data-testid=navbar-desktop] button:has-text("リセット")').click()
    await page.locator('.modal:visible >> button:has-text("リセットする")').click()

    await expect(page.locator('data-testid=counter')).toBeHidden()
    await expect(page.locator('.notification')).toBeVisible()
    await expect(page.locator('data-testid=trials >> .box')).toHaveCount(1)
  })
})

test.describe('エディター', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/timer')
  })

  test('初期表示', async ({ page }) => {
    await expect(page.locator('data-testid=issue >> input[name=tobe]')).toHaveValue('')
    await expect(page.locator('data-testid=issue >> input[name=asis]')).toHaveValue('')
    await expect(page.locator('data-testid=issue >> textarea[name=problem]')).toHaveValue('')
    await expect(page.locator('data-testid=trials >> text=その1')).toBeVisible()
    await expect(page.locator('data-testid=trials >> textarea[name=guess]')).toHaveValue('')
    await expect(page.locator('data-testid=trials >> textarea[name=operation]')).toHaveValue('')
    await expect(page.locator('data-testid=trials >> textarea[name=result]')).toHaveValue('')
  })

  test('試したことの追加', async ({ page }) => {
    await page.locator('data-testid=trials >> button:has-text("試したこと")').click()
    await expect(page.locator('data-testid=trials >> .box')).toHaveCount(2)
  })

  test('試したことの削除', async ({ page }) => {
    await page.locator('data-testid=trials >> button:has-text("削除")').click()
    await expect(page.locator('.modal:visible >> h1')).toHaveText('試したこと その1')
    await page.locator('.modal:visible >> button:has-text("削除する")').click()
    await expect(page.locator('data-testid=trials >> .box')).toHaveCount(0)
  })
})

test.describe('プレビュー', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/timer')
  })

  test('初期表示', async ({ page }) => {
    await expect(page.locator('#preview >> h1')).toHaveText(['解決したいこと', '試したこと'])
  })

  test('解決したいことのプレビュー', async ({ page }) => {
    await page.locator('data-testid=issue >> input[name=tobe]').fill('解決したいことテスト１')
    await page.locator('data-testid=issue >> input[name=asis]').fill('解決したいことテスト２')
    await page.locator('data-testid=issue >> textarea[name=problem]').fill('解決したいことテスト３')

    await expect(page.locator('#preview >> text=解決したいことテスト１')).toBeVisible()
    await expect(page.locator('#preview >> text=解決したいことテスト２')).toBeVisible()
    await expect(page.locator('#preview >> text=解決したいことテスト３')).toBeVisible()
  })

  test('試したことのプレビュー', async ({ page }) => {
    await page.locator('data-testid=trials >> textarea[name=guess]').fill('試したことテスト１')
    await page.locator('data-testid=trials >> textarea[name=operation]').fill('試したことテスト２')
    await page.locator('data-testid=trials >> textarea[name=result]').fill('試したことテスト３')

    await expect(page.locator('#preview >> text=試したことテスト１')).toBeVisible()
    await expect(page.locator('#preview >> text=試したことテスト２')).toBeVisible()
    await expect(page.locator('#preview >> text=試したことテスト３')).toBeVisible()
  })
})

test.describe('フッター', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/timer')
  })

  test('初期表示', async ({ page }) => {
    await expect(page.locator('footer a:has-text("GitHub連携解除")')).toBeHidden()
  })
})
