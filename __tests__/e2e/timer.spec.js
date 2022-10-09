import { test, expect } from '@playwright/test'

test.describe('スタート前', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/timer')
  })

  test('初回アクセス', async ({ page }) => {
    await expect(page.locator('#stopwatch button')).toBeDisabled()
    await expect(page.locator('#stopwatch-counter')).toHaveText('0:0000')
    await expect(page.locator('#stopwatch select')).toHaveValue('30')
    await expect(page.locator('#issue >> input[name=tobe]')).toHaveValue('')
    await expect(page.locator('#issue >> input[name=asis]')).toHaveValue('')
    await expect(page.locator('#issue >> textarea[name=problem]')).toHaveValue('')
    await expect(page.locator('button:has-text("スタート")')).toBeVisible()
    await expect(page.locator('button:has-text("Markdown形式でコピー")')).toBeVisible()
    await expect(page.locator('button:has-text("Gistに保存する")')).toBeVisible()
    await expect(page.locator('#preview >> h1')).toHaveText(['解決したいこと'])
    await expect(page.locator('#preview >> h2')).toBeHidden()
    await expect(page.locator('a:has-text("GitHub連携解除")')).toBeHidden()
    await expect(page.locator('#trials')).toBeHidden()
  })

  test('解決したいことのプレビュー', async ({ page }) => {
    await page.locator('#issue >> input[name=tobe]').fill('解決したいことテスト１')
    await page.locator('#issue >> input[name=asis]').fill('解決したいことテスト２')
    await page.locator('#issue >> textarea[name=problem]').fill('解決したいことテスト３')

    await expect(page.locator('#preview >> text=解決したいことテスト１')).toBeVisible()
    await expect(page.locator('#preview >> text=解決したいことテスト２')).toBeVisible()
    await expect(page.locator('#preview >> text=解決したいことテスト３')).toBeVisible()
  })

  test('Markdown形式でコピー', async ({ page }) => {
    await page.locator('button:has-text("Markdown形式でコピー")').click()
    // ボタンの変化をテストする
  })

})

test.describe('スタート後', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/timer')
    await page.locator('button:has-text("スタート")').click()
  })

  test('スタートボタン', async ({ page }) => {
    await expect(page.locator('#stopwatch-counter')).toHaveText('0:0001')
    await expect(page.locator('#stopwatch button')).toBeEnabled()
    await expect(page.locator('#trials')).toBeVisible()
    await expect(page.locator('#trials >> textarea[name=guess]')).toHaveValue('')
    await expect(page.locator('#trials >> textarea[name=operation]')).toHaveValue('')
    await expect(page.locator('#trials >> textarea[name=result]')).toHaveValue('')
    await expect(page.locator('button:has-text("解決した！")')).toBeVisible()
    await expect(page.locator('button:has-text("終了する")')).toBeVisible()
    await expect(page.locator('#preview >> h2:has-text("その1")')).toBeVisible()
  })

  test('ストップウォッチ', async ({ page }) => {
    await page.waitForTimeout(1000)
    const count = await page.locator('#stopwatch-counter').innerText()

    await page.locator('#stopwatch button').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#stopwatch-counter')).toHaveText(count)

    const localStorage = (await page.context().storageState()).origins[0].localStorage
    const stopwatch = localStorage.filter((item) => item.name === 'stopwatch')[0].value
    const seconds = JSON.parse(stopwatch).seconds
    expect(seconds.toString()).toBe(count.slice(-1))
  })

  test('解決したボタン', async ({ page }) => {
    await page.waitForTimeout(1000)
    const count = await page.locator('#stopwatch-counter').innerText()

    await page.locator('button:has-text("解決した")').click()
    await page.locator('.modal.is-active button.delete').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#stopwatch-counter')).toHaveText(count)
  })

  test('終了するボタン', async ({ page }) => {
    await page.waitForTimeout(1000)
    const count = await page.locator('#stopwatch-counter').innerText()

    await page.locator('button:has-text("終了する")').click()
    await page.locator('.modal.is-active button.delete').click()
    await page.waitForTimeout(1000)
    await expect(page.locator('#stopwatch-counter')).toHaveText(count)
  })

  test('試したことのプレビュー', async ({ page }) => {
    await page.locator('#trials >> textarea[name=guess]').fill('試したことテスト１')
    await page.locator('#trials >> textarea[name=operation]').fill('試したことテスト２')
    await page.locator('#trials >> textarea[name=result]').fill('試したことテスト３')

    await expect(page.locator('#preview >> text=試したことテスト１')).toBeVisible()
    await expect(page.locator('#preview >> text=試したことテスト２')).toBeVisible()
    await expect(page.locator('#preview >> text=試したことテスト３')).toBeVisible()
  })

  test('試したことの追加・削除', async ({ page }) => {
    await page.locator('#trials >> button:has-text("試したこと")').click()
    await expect(page.locator('#trials >> .box')).toHaveCount(2)

    await page.locator('#trials >> button:has(svg)').first().click()
    await page.locator('.modal:visible >> button:has-text("削除する")').click()
    await expect(page.locator('#trials >> .box')).toHaveCount(1)
  })

  test('リセットボタン', async ({ page }) => {
    await page.locator('#issue >> input[name=tobe]').fill('解決したいことテスト１')

    await expect(page.locator('#stopwatch button')).toBeEnabled()
    await expect(page.locator('#preview >> text=解決したいことテスト１')).toBeVisible()
    await expect(page.locator('#trials')).toBeVisible()

    await page.locator('button:has-text("リセット"):visible').click()
    await page.locator('.modal.is-active >> button:has-text("リセットする")').click()

    await expect(page.locator('#stopwatch button')).toBeDisabled()
    await expect(page.locator('#preview >> text=解決したいことテスト１')).toBeHidden()
    await expect(page.locator('#trials')).toBeHidden()
  })

})
