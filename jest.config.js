module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "https://www.seleniumeasy.com/test/"
    },
    testMatch: [
      "**/test.js"
    ],
    verbose: true
}