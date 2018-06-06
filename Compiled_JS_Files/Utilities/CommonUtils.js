"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CommonUtils = /** @class */ (function () {
    function CommonUtils() {
    }
    // Capturing Data from Data Table
    CommonUtils.prototype.fetchExcelData = function (testName, sheetName, columnName, iterationCount) {
        var excelFile = require('xlsx');
        var workbook = excelFile.readFile('Data/Data.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var json = excelFile.utils.sheet_to_json(workbook.Sheets[sheetName]);
        var data = '';
        json.forEach(function (jsonNew) {
            var testCaseName = jsonNew['TestCaseName'];
            var iteration = jsonNew['Iteration'];
            // console.log('Argument is ' + iterationCount);
            // console.log('value is ' + iteration);
            // if (testCaseName == testName && iterationCount == iteration) {
            if (testCaseName == testName) {
                data = jsonNew[columnName];
                // console.log(data);
            }
        });
        if (data.startsWith('#')) {
            var commonDataNumber_1 = data.slice(1, data.length);
            json = excelFile.utils.sheet_to_json(workbook.Sheets['CommonTestData']);
            console.log(json);
            json.forEach(function (jsonNew) {
                var serialNumber = jsonNew['SerialNumber'];
                if (serialNumber == commonDataNumber_1) {
                    data = jsonNew[columnName];
                }
            });
        }
        return data.trim();
    };
    // // Store data in Data Table
    CommonUtils.prototype.writeExcelData = function (testName, sheetName, columnName, value) {
        var Excel = require('exceljs');
        var wb = new Excel.Workbook();
        wb.xlsx.readFile('./Data/Data.xlsx').then(function () {
            var sh = wb.getWorksheet(sheetName);
            var rowNum;
            var colNum;
            //Get the correct TestName row
            for (var i = 1; i <= sh.rowCount; i++) {
                if (sh.getRow(i).getCell(1).value == testName) {
                    rowNum = i;
                    break;
                }
            }
            //Get the correct Column
            for (var i = 1; i <= sh.columnCount; i++) {
                if (sh.getRow(1).getCell(i).value == columnName) {
                    colNum = i;
                    break;
                }
            }
            //Set the value to the desired cell
            sh.getRow(rowNum).getCell(colNum).value = value;
            wb.xlsx.writeFile('./Data/Data.xlsx');
        });
    };
    //return WebElement from a String and locator Type
    CommonUtils.prototype.getWebElement = function (locatorText, locatorType) {
        if (locatorType.toLowerCase().localeCompare('xpath') == 0) {
            return protractor_1.element(protractor_1.by.xpath(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('css') == 0) {
            return protractor_1.element(protractor_1.by.css(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('class') == 0) {
            return protractor_1.element(protractor_1.by.className(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('model') == 0) {
            return protractor_1.element(protractor_1.by.model(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('binding') == 0) {
            return protractor_1.element(protractor_1.by.binding(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('tagname') == 0) {
            return protractor_1.element(protractor_1.by.tagName(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('id') == 0) {
            return protractor_1.element(protractor_1.by.id(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('linktext') == 0) {
            return protractor_1.element(protractor_1.by.linkText(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('name') == 0) {
            return protractor_1.element(protractor_1.by.name(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('partiallinktext') == 0) {
            return protractor_1.element(protractor_1.by.partialLinkText(locatorText));
        }
        else {
            return null;
        }
    };
    //return List of WebElements from a String and locator Type
    CommonUtils.prototype.getWebElements = function (locatorText, locatorType) {
        if (locatorType.toLowerCase().localeCompare('xpath') == 0) {
            return protractor_1.element.all(protractor_1.by.xpath(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('css') == 0) {
            return protractor_1.element.all(protractor_1.by.css(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('class') == 0) {
            return protractor_1.element.all(protractor_1.by.className(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('model') == 0) {
            return protractor_1.element.all(protractor_1.by.model(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('binding') == 0) {
            return protractor_1.element.all(protractor_1.by.binding(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('tagname') == 0) {
            return protractor_1.element.all(protractor_1.by.tagName(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('id') == 0) {
            return protractor_1.element.all(protractor_1.by.id(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('linktext') == 0) {
            return protractor_1.element.all(protractor_1.by.linkText(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('name') == 0) {
            return protractor_1.element.all(protractor_1.by.name(locatorText));
        }
        else if (locatorType.toLowerCase().localeCompare('partiallinktext') == 0) {
            return protractor_1.element.all(protractor_1.by.partialLinkText(locatorText));
        }
        else {
            return null;
        }
    };
    // Set textbox value
    CommonUtils.prototype.setTextBoxValue = function (locator, locatorType, val) {
        var element = this.getWebElement(locator, locatorType);
        element.sendKeys(val);
    };
    // Scroll into view
    CommonUtils.prototype.scrollIntoView = function (locator, locatorType) {
        var element = this.getWebElement(locator, locatorType);
        protractor_1.browser.actions().mouseMove(element).perform();
    };
    // Highlight an object
    CommonUtils.prototype.highlightObject = function (locator, locatorType, color) {
        var element = this.getWebElement(locator, locatorType);
        protractor_1.browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "background-color: " + color + "; border: 2px solid " + color + ";");
        protractor_1.browser.sleep(1000);
        protractor_1.browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "");
    };
    // Click
    CommonUtils.prototype.clickWebElement = function (locator, locatorType) {
        var element = this.getWebElement(locator, locatorType);
        element.click();
    };
    // Perform Right/Context click
    CommonUtils.prototype.contextClickOnElement = function (locator, locatorType) {
        var element = this.getWebElement(locator, locatorType);
        protractor_1.browser.actions().mouseMove(element).perform();
        protractor_1.browser.actions().click(protractor_1.protractor.Button.RIGHT).perform();
    };
    // Validate presence of a web element
    CommonUtils.prototype.verifyElementPresence = function (locator, locatorText) {
        var element = this.getWebElement(locator, locatorText);
        expect(element.isPresent()).toBeTruthy();
    };
    // Validate absence of a web element
    CommonUtils.prototype.verifyElementAbsence = function (locator, locatorText) {
        var element = this.getWebElement(locator, locatorText);
        expect(element.isPresent()).toBeFalsy();
    };
    // Validate that a web element is displayed
    CommonUtils.prototype.verifyElementDisplayed = function (locator, locatorText) {
        var element = this.getWebElement(locator, locatorText);
        expect(element.isDisplayed()).toBeTruthy();
    };
    return CommonUtils;
}());
exports.CommonUtils = CommonUtils;
//# sourceMappingURL=CommonUtils.js.map