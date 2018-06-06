import {
    browser,
    by,
    element,
    ElementFinder,
    ElementArrayFinder
} from 'protractor';
// locators
export class OracleLoginPage {

// Locator Types
    locateByModel = 'model';
    locateByBinding = 'binding';
    locateById = 'id';
    locateByXpath = 'xpath';
    locateByCss = 'css';
    locateByClass = 'class';

// Locator Values
    // firstNumberFieldLocator = 'first';
    // secondNumberFieldLocator = 'second';
    // operatorButtonLocator = 'operator';
    // multiplicationLocator = ".//option[@value= 'MULTIPLICATION']";
    // goButtonLocator = 'gobutton';
    // resultLocator = 'latest';

    userID = "//input[@id='userid']";
    password = "//input[@id='password']";
    signInBtn = "//button[@id='btnActive']";
    myWorkForceLink = "//a[contains(text(), 'My Workforce')]";
    personManagementLink = "//a[contains(text(), 'Person Management')]";
    


}
