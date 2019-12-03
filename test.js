const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Tugas akhir PPL tercinta :*', () => {

    test('1. Klik simple form demo drop down and redirected to https://www.seleniumeasy.com/test/basic-first-form-demo.html ', async () => {
        await page.click('.dropdown-menu > li:nth-child(0+0)')
        await page.waitForNavigation({waitUntil: "domcontentloaded"});
        const title = await page.title();
        expect(title).toBe('Selenium Easy - Best Demo website to practice Selenium Webdriver Online');
    }, timeout);
});