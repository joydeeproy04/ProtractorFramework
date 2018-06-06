"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var PageOne_po_1 = require("../../FunctionLibrary/PageOne.po");
var CommonUtils_1 = require("../../Utilities/CommonUtils");
var iterationCount = 0;
describe('Sample Test Case for Protractor Framework', function () {
    iterationCount++;
    var page;
    var commonutils;
    commonutils = new CommonUtils_1.CommonUtils();
    page = new PageOne_po_1.PageOne();
    var url = commonutils.fetchExcelData('todo-spec', 'Module1', 'URL', iterationCount);
    var firstNumber = commonutils.fetchExcelData('todo-spec', 'Module1', 'FirstNumber', iterationCount);
    var seconNumber = commonutils.fetchExcelData('todo-spec', 'Module1', 'SecondNumber', iterationCount);
    var result = commonutils.fetchExcelData('todo-spec', 'Module1', 'Result', iterationCount);
    it('Browser should get launched with the url ' + url, function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get(url);
    }),
        it('The first number field gets populated with a number i.e. ' + firstNumber, function () {
            commonutils.highlightObject(page.firstNumberFieldLocator, page.locateByModel, 'yellow');
            commonutils.setTextBoxValue(page.firstNumberFieldLocator, page.locateByModel, firstNumber);
        }),
        it('The second number field gets populated with a number i.e. ' + seconNumber, function () {
            commonutils.setTextBoxValue(page.secondNumberFieldLocator, page.locateByModel, seconNumber);
        }),
        it('The Operator Button should be present and clicked in order to choose an operator', function () {
            commonutils.clickWebElement(page.operatorButtonLocator, page.locateByModel);
        }),
        it('MULTIPLICATION Operator should be selected', function () {
            commonutils.clickWebElement(page.multiplicationLocator, page.locateByXpath);
        }),
        it('GO Button should be present and clicked', function () {
            commonutils.highlightObject(page.goButtonLocator, page.locateById, 'red');
            commonutils.clickWebElement(page.goButtonLocator, page.locateById);
        }),
        it('The Product of ' + firstNumber + ' and ' + seconNumber + ' should equal to ' + result, function () {
            protractor_1.browser.sleep(4000);
            // let a: string;
            // commonutils.getWebElement(page.resultLocator, page.locateByBinding).getAttribute('value').then(txt => {
            //     a = txt;
            // });
            // commonutils.writeExcelData('todo-spec', 'Module1', 'ActualOutput', a);
            expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).toEqual(result); // Correct expectation
        });
});
//# sourceMappingURL=todo-spec.js.map