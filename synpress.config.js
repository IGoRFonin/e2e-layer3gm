const { defineConfig } = require('cypress')
const synpressPlugins = require('@synthetixio/synpress/plugins');


/*

 */
module.exports = defineConfig({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.88 Safari/537.36',
    retries: {
        runMode: 0,
        openMode: 0,
    },
    video: false,
    chromeWebSecurity: true,
    viewportWidth: 1366,
    viewportHeight: 850,
    env: {
        coverage: false,
    },
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    e2e: {
        setupNodeEvents(on, config) {
            synpressPlugins(on, config);
            return config
        },
        testIsolation: false,
        baseUrl: 'https://beta.layer3.xyz/',
        specPattern: 'tests/e2e/specs/**/*spec.{js,jsx,ts,tsx}',
        supportFile: 'tests/e2e/support.js',
    },
    component: {
        specPattern: './**/*spec.{js,jsx,ts,tsx}',
    },
})
