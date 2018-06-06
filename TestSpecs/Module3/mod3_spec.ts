import { ElementFinder, browser, by, element } from 'protractor';
describe('Alag hai', function () {
    it('Multiplication should work fine', function () {
        browser.driver.manage().window().maximize();
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(5);
        element(by.model('second')).sendKeys(5);
        // element()
        element(by.model('operator')).click();
        // tslint:disable-next-line:quotemark
        element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        element(by.id('gobutton')).click();
        browser.sleep(4000);
        // expect(element(by.binding('latest')).getText()).toEqual('10'); // Incorrect expectation
        expect<any>(element(by.binding('latest')).getText()).toEqual('45'); // Correct expectation
    });
    it('Division should work fine', function () {
        browser.driver.manage().window().maximize();
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(50);
        element(by.model('second')).sendKeys(5);
        element(by.model('operator')).click();
        // tslint:disable-next-line:quotemark
        element(by.xpath(".//option[@value= 'DIVISION']")).click();
        element(by.id('gobutton')).click();
        browser.sleep(4000);
        expect<any>(element(by.binding('latest')).getText()).toEqual('4'); // Correct expectation
    });
    it('Addition should work fine', function () {
        browser.driver.manage().window().maximize();
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(10);
        element(by.model('second')).sendKeys(5);
        element(by.model('operator')).click();
        // tslint:disable-next-line:quotemark
        element(by.xpath(".//option[@value= 'ADDITION']")).click();
        element(by.id('gobutton')).click();
        browser.sleep(4000);
        expect<any>(element(by.binding('latest')).getText()).toEqual('15'); // Correct expectation
    });
});
