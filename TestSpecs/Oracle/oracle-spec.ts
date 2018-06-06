import { ElementFinder, browser, by, element } from 'protractor';
import { CommonUtils } from '../../Utilities/CommonUtils';
import { OracleLoginPage } from '../../FunctionLibrary/OraclePageOne.po';
describe('Sample Test Case for Protractor Framework', function () {
    let page: OracleLoginPage;
    let commonutils: CommonUtils;
    commonutils = new CommonUtils();
    page = new OracleLoginPage();
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;

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

