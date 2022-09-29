const { chromium } = require('@playwright/test')
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.test.local') })

module.exports = async (config) => {
  // const { baseURL } = config.projects[0].use
  // const browser = await chromium.launch()
  // const page = await browser.newPage()
  // await page.goto(`${baseURL}/timer`)
  // await page.locator('_react=GistAuthMessage >> text=GitHubと連携').click()
  // await page.locator('#login_field').fill(process.env.GITHUB_ACCOUNT)
  // await page.locator('#password').fill(process.env.GITHUB_PW)
  // await page.locator('input[type=submit]').click()
  // // await page.locator('#js-oauth-authorize-btn').click()
  // await page.waitForNavigation()
  //
  // await page.context().storageState({ path: 'authenticatedState.json' })
  // await browser.close()
}
