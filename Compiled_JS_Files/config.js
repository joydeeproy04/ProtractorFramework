"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HtmlReporter = require('protractor-beautiful-reporter');
var utils = require('./Utilities/CommonUtils');
// Unique Run Time Result folder generation(START)
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var todayDate, todayMonth, timestamp, hour, minute, second;
if (dd < 10) {
    todayDate = '0' + dd.toString();
}
if (mm < 10) {
    todayMonth = '0' + mm.toString();
}
hour = today.getHours();
minute = today.getMinutes();
second = today.getSeconds();
timestamp = mm + '_' + dd + '_' + yyyy + '_' + hour + '_' + minute + '_' + second;
// Unique Run Time Result folder generation(END)
// Run Manager Implementation(START)
var excelFile = require('xlsx');
var workbook = excelFile.readFile('RunManager.xlsx');
var sheet_name_list = workbook.SheetNames;
var json = excelFile.utils.sheet_to_json(workbook.Sheets['Master']);
var arrayTest = [];
var browserToLaunch;
console.log(json);
json.forEach(function (jsonNew) {
    if (jsonNew.RunStatus === 'Y') {
        var testScenario_1 = jsonNew.TestScenario;
        var module_name = excelFile.utils.sheet_to_json(workbook.Sheets[testScenario_1]);
        module_name.forEach(function (module) {
            if (module.RunStatus === 'Y') {
                var startIter = module.StartIteration;
                var endIter = module.EndIteration;
                browserToLaunch = module.Browser;
                if (endIter > startIter) {
                    for (var i = startIter; i <= endIter; i++) {
                        var testCase = module.TestCase;
                        arrayTest.push('TestSpecs/' + testScenario_1 + '/' + testCase + '.js');
                    }
                }
                else {
                    var testCase = module.TestCase;
                    arrayTest.push('TestSpecs/' + testScenario_1 + '/' + testCase + '.js');
                }
            }
        });
        console.log('Specs to run is ' + arrayTest);
    }
});
console.log(arrayTest);
// Run Manager Implementation(END)
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    allScriptsTimeout: 40000,
    capabilities: {
        browserName: browserToLaunch,
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=1920,1080"],
            binary: process.env.GOOGLE_CHROME_SHIM
        }
    },
    specs: arrayTest,
    onPrepare: function () {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Results/Run_' + timestamp,
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons',
            docTitle: 'Execution Report',
            docName: 'Report.html',
            preserveDirectory: false
        }).getJasmine2Reporter());
    },
};
//# sourceMappingURL=config.js.map