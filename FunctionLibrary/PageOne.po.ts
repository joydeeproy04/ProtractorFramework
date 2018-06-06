import {
    browser,
    by,
    element,
    ElementFinder,
    ElementArrayFinder
} from 'protractor';
// locators
export class PageOne {

// Locator Types
    locateByModel = 'model';
    locateByBinding = 'binding';
    locateById = 'id';
    locateByXpath = 'xpath';
    locateByCss = 'css';
    locateByClass = 'class';

// Locator Values
    firstNumberFieldLocator = 'first';
    secondNumberFieldLocator = 'second';
    operatorButtonLocator = 'operator';
    multiplicationLocator = ".//option[@value= 'MULTIPLICATION']";
    goButtonLocator = 'gobutton';
    resultLocator = 'latest';



}
