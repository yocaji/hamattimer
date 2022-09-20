import { devices } from '@playwright/test'

const config = {
    testMatch: '/e2e/**/*.spec.js',
    use: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000',
        headless: true,
        ignoreHTTPSErrors: true,
        actionTimeout: 10_000
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        }
    ]
}
export default config;
