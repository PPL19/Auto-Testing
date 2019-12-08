const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Tugas akhir PPL tercinta :*', () => {

    test('7. Inputing many field and comparing the result', async () => {
        const inputer = "testt";
        const inputer1 = "085250036556";
        const rad = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left section.content:nth-child(2) form.well.form-horizontal div.form-group:nth-child(11) div.col-md-4:nth-child(2) div.radio:nth-child(1) label:nth-child(1) > input:nth-child(1)');
        // await page.waitForSelector("#get-input");
        await page.type('input[name=first_name]', inputer)
        await page.type('input[name=last_name]', inputer)
        await page.type('input[name=email]', inputer)
        await page.type('input[name=phone]', inputer1)
        await page.type('input[name=address]', inputer)
        await page.type('input[name=city]', inputer)
        await page.type('input[name=zip]', inputer)
        await page.type('input[name=website]', inputer)
        await rad.click();
        await page.type('textarea[name=comment]', inputer)
        const button = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left section.content:nth-child(2) form.well.form-horizontal fieldset:nth-child(1) div.form-group:nth-child(14) div.col-md-4:nth-child(2) > button.btn.btn-default');
        await button.click();
        // const result = await page.$eval('#display', el => el.innerHTML);
        // expect(result).toBe(inputer);
        
    }, timeout);

});