"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// locators
var OracleLoginPage = /** @class */ (function () {
    function OracleLoginPage() {
        // Locator Types
        this.locateByModel = 'model';
        this.locateByBinding = 'binding';
        this.locateById = 'id';
        this.locateByXpath = 'xpath';
        this.locateByCss = 'css';
        this.locateByClass = 'class';
        // Locator Values
        // firstNumberFieldLocator = 'first';
        // secondNumberFieldLocator = 'second';
        // operatorButtonLocator = 'operator';
        // multiplicationLocator = ".//option[@value= 'MULTIPLICATION']";
        // goButtonLocator = 'gobutton';
        // resultLocator = 'latest';
        this.userID = "//input[@id='userid']";
        this.password = "//input[@id='password']";
        this.signInBtn = "//button[@id='btnActive']";
        this.myWorkForceLink = "//a[contains(text(), 'My Workforce')]";
        this.personManagementLink = "//a[contains(text(), 'Person Management')]";
    }
    return OracleLoginPage;
}());
exports.OracleLoginPage = OracleLoginPage;
//# sourceMappingURL=OraclePageOne.po.js.map