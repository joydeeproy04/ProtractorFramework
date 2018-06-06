"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// locators
var PageOne = /** @class */ (function () {
    function PageOne() {
        // Locator Types
        this.locateByModel = 'model';
        this.locateByBinding = 'binding';
        this.locateById = 'id';
        this.locateByXpath = 'xpath';
        this.locateByCss = 'css';
        this.locateByClass = 'class';
        // Locator Values
        this.firstNumberFieldLocator = 'first';
        this.secondNumberFieldLocator = 'second';
        this.operatorButtonLocator = 'operator';
        this.multiplicationLocator = ".//option[@value= 'MULTIPLICATION']";
        this.goButtonLocator = 'gobutton';
        this.resultLocator = 'latest';
    }
    return PageOne;
}());
exports.PageOne = PageOne;
//# sourceMappingURL=PageOne.po.js.map