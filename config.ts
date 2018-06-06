import { ProtractorBrowser, Config } from 'protractor';
const HtmlReporter = require('protractor-beautiful-reporter');
const utils = require('./Utilities/CommonUtils');

// Unique Run Time Result folder generation(START)
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1; //January is 0!
const yyyy = today.getFullYear();
let todayDate, todayMonth, timestamp, hour, minute, second;
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
const excelFile = require('xlsx');
const workbook = excelFile.readFile('RunManager.xlsx');
const sheet_name_list = workbook.SheetNames;
const json = excelFile.utils.sheet_to_json(workbook.Sheets['Master']);
const arrayTest = [];
let browserToLaunch : string;
console.log(json);
json.forEach(function (jsonNew) {
    if (jsonNew.RunStatus === 'Y') {
        const testScenario = jsonNew.TestScenario;
        const module_name = excelFile.utils.sheet_to_json(workbook.Sheets[testScenario]);
        module_name.forEach(function (module) {
            if (module.RunStatus === 'Y') {
                const startIter = module.StartIteration;
                const endIter = module.EndIteration;
                browserToLaunch = module.Browser;
                if(endIter > startIter){
                    for(let i : number = startIter; i <= endIter; i++){
                    const testCase = module.TestCase;
                    arrayTest.push('TestSpecs/' + testScenario + '/' + testCase + '.js');                
                    }
                }else{
                    const testCase = module.TestCase;
                    arrayTest.push('TestSpecs/' + testScenario + '/' + testCase + '.js');    
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
