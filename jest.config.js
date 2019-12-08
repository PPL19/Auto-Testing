module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "https://www.seleniumeasy.com/test/input-form-demo.html"
    },
    testMatch: [
      "**/test.js"
    ],
    verbose: true
}