"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Alag hai', function () {
    it('Multiplication should work fine', function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.element(protractor_1.by.model('first')).sendKeys(5);
        protractor_1.element(protractor_1.by.model('second')).sendKeys(5);
        // element()
        protractor_1.element(protractor_1.by.model('operator')).click();
        // tslint:disable-next-line:quotemark
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        protractor_1.browser.sleep(4000);
        // expect(element(by.binding('latest')).getText()).toEqual('10'); // Incorrect expectation
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('45'); // Correct expectation
    });
    it('Division should work fine', function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.element(protractor_1.by.model('first')).sendKeys(50);
        protractor_1.element(protractor_1.by.model('second')).sendKeys(5);
        protractor_1.element(protractor_1.by.model('operator')).click();
        // tslint:disable-next-line:quotemark
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'DIVISION']")).click();
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        protractor_1.browser.sleep(4000);
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('4'); // Correct expectation
    });
    it('Addition should work fine', function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.element(protractor_1.by.model('first')).sendKeys(10);
        protractor_1.element(protractor_1.by.model('second')).sendKeys(5);
        protractor_1.element(protractor_1.by.model('operator')).click();
        // tslint:disable-next-line:quotemark
        protractor_1.element(protractor_1.by.xpath(".//option[@value= 'ADDITION']")).click();
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        protractor_1.browser.sleep(4000);
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual('15'); // Correct expectation
    });
});
//# sourceMappingURL=mod3_spec.js.map