import { ElementFinder, browser, element, by, protractor } from "protractor";

export class CommonUtils {

    // Capturing Data from Data Table
    fetchExcelData(testName: string, sheetName: string, columnName: string, iterationCount: number) {
        const excelFile = require('xlsx');
        const workbook = excelFile.readFile('Data/Data.xlsx');
        const sheet_name_list = workbook.SheetNames;
        let json = excelFile.utils.sheet_to_json(workbook.Sheets[sheetName]);
        let data = '';

        json.forEach(function (jsonNew) {
            let testCaseName = jsonNew['TestCaseName'];
            let iteration = jsonNew['Iteration'];
            // console.log('Argument is ' + iterationCount);
            // console.log('value is ' + iteration);

            // if (testCaseName == testName && iterationCount == iteration) {
            if (testCaseName == testName) {
                data = jsonNew[columnName];
                // console.log(data);
            }
        });
        if (data.startsWith('#')) {
            let commonDataNumber = data.slice(1, data.length);
            json = excelFile.utils.sheet_to_json(workbook.Sheets['CommonTestData']);
            console.log(json);
            json.forEach(function (jsonNew) {
                let serialNumber = jsonNew['SerialNumber'];
                if (serialNumber == commonDataNumber) {
                    data = jsonNew[columnName];
                }
            });
        }
        return data.trim();
    }

    // // Store data in Data Table
    writeExcelData(testName, sheetName, columnName, value) {
        const Excel = require('exceljs');
        let wb = new Excel.Workbook();

        wb.xlsx.readFile('./Data/Data.xlsx').then(function () {

            var sh = wb.getWorksheet(sheetName);
            let rowNum: number;
            let colNum: number;

            //Get the correct TestName row
            for (let i = 1; i <= sh.rowCount; i++) {
                if (sh.getRow(i).getCell(1).value == testName) {
                    rowNum = i;
                    break;
                }
            }

            //Get the correct Column
            for (let i = 1; i <= sh.columnCount; i++) {
                if (sh.getRow(1).getCell(i).value == columnName) {
                    colNum = i;
                    break;
                }
            }

            //Set the value to the desired cell
            sh.getRow(rowNum).getCell(colNum).value = value;
            wb.xlsx.writeFile('./Data/Data.xlsx');
        })

    }

    //return WebElement from a String and locator Type
    getWebElement(locatorText: string, locatorType: string) {
        if (locatorType.toLowerCase().localeCompare('xpath') == 0) {
            return element(by.xpath(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('css') == 0) {
            return element(by.css(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('class') == 0) {
            return element(by.className(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('model') == 0) {
            return element(by.model(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('binding') == 0) {
            return element(by.binding(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('tagname') == 0) {
            return element(by.tagName(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('id') == 0) {
            return element(by.id(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('linktext') == 0) {
            return element(by.linkText(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('name') == 0) {
            return element(by.name(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('partiallinktext') == 0) {
            return element(by.partialLinkText(locatorText));
        } else {
            return null;
        }
    }
    //return List of WebElements from a String and locator Type
    getWebElements(locatorText: string, locatorType: string) {
        if (locatorType.toLowerCase().localeCompare('xpath') == 0) {
            return element.all(by.xpath(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('css') == 0) {
            return element.all(by.css(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('class') == 0) {
            return element.all(by.className(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('model') == 0) {
            return element.all(by.model(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('binding') == 0) {
            return element.all(by.binding(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('tagname') == 0) {
            return element.all(by.tagName(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('id') == 0) {
            return element.all(by.id(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('linktext') == 0) {
            return element.all(by.linkText(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('name') == 0) {
            return element.all(by.name(locatorText));
        } else if (locatorType.toLowerCase().localeCompare('partiallinktext') == 0) {
            return element.all(by.partialLinkText(locatorText));
        } else {
            return null;
        }
    }

    // Set textbox value
    setTextBoxValue(locator: string, locatorType: string, val: string) {
        let element = this.getWebElement(locator, locatorType);
        element.sendKeys(val);
    }

    // Scroll into view
    scrollIntoView(locator: string, locatorType: string) {
        let element = this.getWebElement(locator, locatorType);
        browser.actions().mouseMove(element).perform();
    }

    // Highlight an object
    highlightObject(locator: string, locatorType: string, color: string) {
        let element = this.getWebElement(locator, locatorType);
        browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "background-color: " + color + "; border: 2px solid " + color + ";");
        browser.sleep(1000);
        browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "");
    }

    // Click
    clickWebElement(locator: string, locatorType: string) {
        let element = this.getWebElement(locator, locatorType);
        element.click();
    }

    // Perform Right/Context click
    contextClickOnElement(locator: string, locatorType: string) {
        let element = this.getWebElement(locator, locatorType);
        browser.actions().mouseMove(element).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
    }

    // Validate presence of a web element
    verifyElementPresence(locator: string, locatorText: string) {
        let element = this.getWebElement(locator, locatorText);
        expect(element.isPresent()).toBeTruthy();
    }

    // Validate absence of a web element
    verifyElementAbsence(locator: string, locatorText: string) {
        let element = this.getWebElement(locator, locatorText);
        expect(element.isPresent()).toBeFalsy();
    }

    // Validate that a web element is displayed
    verifyElementDisplayed(locator: string, locatorText: string) {
        let element = this.getWebElement(locator, locatorText);
        expect(element.isDisplayed()).toBeTruthy();
    }
}

