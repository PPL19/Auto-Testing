module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "https://www.seleniumeasy.com/test/basic-radiobutton-demo.html"
    },
    testMatch: [
      "**/test.js"
    ],
    verbose: true
}