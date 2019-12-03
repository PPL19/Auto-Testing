const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Title test', () => {
    test('Testing to google title', async () => {
        const title = await page.title();

        expect(title).toBe('Google');
    }, timeout);
});
