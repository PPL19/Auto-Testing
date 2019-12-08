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
        await page.type('#user-message', inputer);
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
        // const result = await page.$eval('#display', el => el.innerHTML);
        // expect(result).toBe(inputer);
        
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

    test('6. Go To Radio Button Form', async () => {
        const input = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-3.sidenav:nth-child(1) div.panel.panel-default div.panel-body ul.treeview.treeview-tree li.tree-branch ul:nth-child(3) > li.tree-branch:nth-child(1)');
        await input.click();
        const radio = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-3.sidenav:nth-child(1) div.panel.panel-default div.panel-body ul.treeview.treeview-tree li.tree-branch ul:nth-child(3) li.tree-branch:nth-child(1) ul:nth-child(3) li:nth-child(3) > a:nth-child(1)');
        await radio.click();
        await page.waitForNavigation({waitUntil: "domcontentloaded"});
        const title = await page.title();
        expect(title).toBe('Selenium Easy Demo - Radio buttons demo for Automation');
    });

    test('7. radio button testing "Male"', async () => {
        const button = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(4) div.panel-body p:nth-child(6)> button.btn.btn-default');
        await button.click();
        const result = await page.$eval('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(4) div.panel-body > p.radiobutton:nth-child(7)', el => el.innerHTML);
        const resultTo = "Radio button 'Male' is checked";
        expect(result).toBe(resultTo);
    }, timeout);

    test('8. radio button testing "Female"', async () => {
        await page.reload({waitUntil: "domcontentloaded"});
        const rad = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(4) div.panel-body label:nth-child(3)> input');
        await rad.click();
        const button = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(4) div.panel-body p:nth-child(6)> button.btn.btn-default');
        await button.click();
    }, timeout);

    test('9. radio button testing Not Tested', async () => {
        await page.reload({waitUntil: "domcontentloaded"});
        const button = await page.$('div.container-fluid.text-center:nth-child(2) div.row div.col-md-6.text-left:nth-child(2) div.panel.panel-default:nth-child(4) div.panel-body p:nth-child(6)> button.btn.btn-default');
        await button.click();
    }, timeout);

});