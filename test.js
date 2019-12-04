const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Tugas akhir PPL tercinta :*', () => {

    test('1. Click simple form demo drop down and redirected to https://www.seleniumeasy.com/test/basic-first-form-demo.html ', async () => {
        var inputElement = await page.$('div.container-fluid:nth-child(1) div.row:nth-child(2) nav.navbar.navbar-default div.container div.collapse.navbar-collapse ul.nav.navbar-nav:nth-child(1) li.dropdown:nth-child(1) > a.dropdown-toggle');
        await inputElement.click();
        await page.waitForSelector("div.container-fluid:nth-child(1) div.row:nth-child(2) nav.navbar.navbar-default div.container div.collapse.navbar-collapse ul.nav.navbar-nav:nth-child(1) > li.dropdown.open:nth-child(1)");
        inputElement = await page.$('div.container-fluid:nth-child(1) div.row:nth-child(2) nav.navbar.navbar-default div.container div.collapse.navbar-collapse ul.nav.navbar-nav:nth-child(1) li.dropdown.open:nth-child(1) ul.dropdown-menu li:nth-child(1) > a:nth-child(1)');
        await inputElement.click();
        await page.waitForNavigation({waitUntil: "domcontentloaded"});
        const title = await page.title();
        expect(title).toBe('Selenium Easy Demo - Simple Form to Automate using Selenium');
    }, timeout);

    test('2. Inputing single input field and comparing the result', async () => {
        const inputer = "Hallo";
        await page.waitForSelector("#get-input");
        await page.type('#user-message', inputer)
        const button = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(4) div.panel-body form:nth-child(3) > button.btn.btn-default');
        await button.click();
        const result = await page.$eval('#display', el => el.innerHTML);
        expect(result).toBe(inputer);
    }, timeout);

    test('3. Inputing multi input field and make "NaN" result', async () => {
        const a = "abc";
        await page.type('#sum1', a);
        await page.type('#sum2', a);
        const button = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(5) div.panel-body form:nth-child(3) > button.btn.btn-default:nth-child(3)');
        await button.click();
        const expected = "NaN";
        const result = await page.$eval('#displayvalue', el => el.innerHTML);
        expect(result).toBe(expected);
    }, timeout);

    test('4. Inputing number and see the result and compare it', async () =>{
        await page.reload({waitUntil: "domcontentloaded"});
        const number1 = 53;
        const number2 = 50;
        await page.type('#sum1', number1.toString());
        await page.type('#sum2', number2.toString());
        const button = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(5) div.panel-body form:nth-child(3) > button.btn.btn-default:nth-child(3)');
        await button.click();
        const expected = (number1+number2).toString();
        const result = await page.$eval('#displayvalue', el => el.innerHTML);
        expect(result).toBe(expected);
    }, timeout);

    test('5. Progress Bars and Slider testing', async () => {
        const progress = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-3.sidenav:nth-child(1) div.panel.panel-default div.panel-body ul.treeview.treeview-tree li.tree-branch ul:nth-child(3) > li.tree-branch:nth-child(4)');
        await progress.click();
        const slider = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-3.sidenav:nth-child(1) div.panel.panel-default div.panel-body ul.treeview.treeview-tree li.tree-branch ul:nth-child(3) li.tree-branch:nth-child(4) ul:nth-child(3) li:nth-child(3) > a:nth-child(1)');
        await slider.click();
        await page.waitForNavigation({waitUntil: "domcontentloaded"});
        const title = await page.title();
        expect(title).toBe('Selenium Easy - Drag and Drop Range Sliders');
    });
});