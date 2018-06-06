"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CommonUtils_1 = require("../../Utilities/CommonUtils");
var OraclePageOne_po_1 = require("../../FunctionLibrary/OraclePageOne.po");
describe('Sample Test Case for Protractor Framework', function () {
    var page;
    var commonutils;
    commonutils = new CommonUtils_1.CommonUtils();
    page = new OraclePageOne_po_1.OracleLoginPage();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.ignoreSynchronization = true;
    // let url = commonutils.fetchExcelData('oracle-spec', 'Oracle', 'URL');
    // let username = commonutils.fetchExcelData('oracle-spec', 'Oracle', 'Username');
    // let password = commonutils.fetchExcelData('oracle-spec', 'Oracle', 'Password');
    // it('Browser should get launched with the application url', function () {
    //     browser.driver.manage().window().maximize();
    //     browser.get(url);
    // }),
    // it('The username field gets populated', function () {
    //     commonutils.highlightObject(page.userID, page.locateByXpath, 'green');
    //     commonutils.setTextBoxValue(page.userID, page.locateByXpath, username);
    // }),
    // it('The password field gets populated', function () {
    //     commonutils.setTextBoxValue(page.password, page.locateByXpath, password);
    // }),
    // it('The Sign in Button should be present and clicked', function () {
    //     commonutils.clickWebElement(page.signInBtn, page.locateByXpath);
    // }),
    // it('After the Sign in Button is clicked, user should be navigated to the Application Home Page', function () {
    //     commonutils.verifyElementPresence(page.myWorkForceLink, page.locateByXpath);
    // }),
    // it('My Workforce Link should be present and clicked', function () {
    //     commonutils.clickWebElement(page.myWorkForceLink, page.locateByXpath);
    // }),
    // it('Person Management Link should be present and clicked', function () {
    //     commonutils.clickWebElement(page.personManagementLink, page.locateByXpath);
    // }),
    // it('My Workforce Link should be present and clicked', function () {
    //     commonutils.clickWebElement(page.myWorkForceLink, page.locateByXpath);
    // });
});
//# sourceMappingURL=oracle-spec.js.map