import { ElementFinder, browser, by, element } from 'protractor';
import { PageOne } from '../../FunctionLibrary/PageOne.po';
import { CommonUtils } from '../../Utilities/CommonUtils';
let iterationCount : number = 0;
describe('Sample Test Case for Protractor Framework', function () {

    iterationCount++;

    let page: PageOne;
    let commonutils: CommonUtils;
    commonutils = new CommonUtils();
    page = new PageOne();

    let url = commonutils.fetchExcelData('todo-spec', 'Module1', 'URL', iterationCount);
    let firstNumber = commonutils.fetchExcelData('todo-spec', 'Module1', 'FirstNumber', iterationCount);
    let seconNumber = commonutils.fetchExcelData('todo-spec', 'Module1', 'SecondNumber', iterationCount);
    let result = commonutils.fetchExcelData('todo-spec', 'Module1', 'Result', iterationCount);

    it('Browser should get launched with the url ' + url, function () {
        browser.driver.manage().window().maximize();
        browser.get(url);
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
        browser.sleep(4000);
        // let a: string;
        // commonutils.getWebElement(page.resultLocator, page.locateByBinding).getAttribute('value').then(txt => {
        //     a = txt;
        // });
        // commonutils.writeExcelData('todo-spec', 'Module1', 'ActualOutput', a);
        expect<any>(element(by.binding('latest')).getText()).toEqual(result);// Correct expectation
    });

});

