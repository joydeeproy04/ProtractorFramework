var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Browser should get launched with the url http://juliemr.github.io/protractor-demo/|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00ae007d-0080-00c2-0054-00fe00f600e7.png",
        "timestamp": 1528281824047,
        "duration": 4223
    },
    {
        "description": "The first number field gets populated with a number i.e. 5|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0068002e-002e-0013-0002-001a00e2001a.png",
        "timestamp": 1528281828715,
        "duration": 1183
    },
    {
        "description": "The second number field gets populated with a number i.e. 6|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\008100a8-00fd-0019-00fb-00df00f40035.png",
        "timestamp": 1528281830394,
        "duration": 86
    },
    {
        "description": "The Operator Button should be present and clicked in order to choose an operator|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0015000c-00df-0059-00f4-001a006c0031.png",
        "timestamp": 1528281830843,
        "duration": 115
    },
    {
        "description": "MULTIPLICATION Operator should be selected|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0083005a-0093-00cf-005e-00e000ab0092.png",
        "timestamp": 1528281831301,
        "duration": 88
    },
    {
        "description": "GO Button should be present and clicked|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\000f00b0-000a-002a-001c-00ae00030069.png",
        "timestamp": 1528281831726,
        "duration": 1249
    },
    {
        "description": "The Product of 5 and 6 should equal to 30|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00cd00d8-001b-0024-00f1-00d3006c0013.png",
        "timestamp": 1528281833323,
        "duration": 4056
    },
    {
        "description": "Browser should get launched with the url http://juliemr.github.io/protractor-demo/|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\007100fe-004e-00f4-00ce-004800ee008f.png",
        "timestamp": 1528281837723,
        "duration": 145
    },
    {
        "description": "The first number field gets populated with a number i.e. 5|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\003d00db-00a5-000c-0070-00d900fc0087.png",
        "timestamp": 1528281838179,
        "duration": 1153
    },
    {
        "description": "The second number field gets populated with a number i.e. 6|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00370075-008b-00ca-00e6-00af007c00e0.png",
        "timestamp": 1528281839702,
        "duration": 87
    },
    {
        "description": "The Operator Button should be present and clicked in order to choose an operator|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00f40034-006f-00d1-0039-0093000000d8.png",
        "timestamp": 1528281840174,
        "duration": 108
    },
    {
        "description": "MULTIPLICATION Operator should be selected|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00d0006e-00b2-009b-0056-00cc004e0098.png",
        "timestamp": 1528281840642,
        "duration": 84
    },
    {
        "description": "GO Button should be present and clicked|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\005d001a-00c1-0000-0031-003300310055.png",
        "timestamp": 1528281841076,
        "duration": 1182
    },
    {
        "description": "The Product of 5 and 6 should equal to 30|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 161256,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots\\005b00cb-0083-0035-004e-00b00015008e.png",
        "timestamp": 1528281842604,
        "duration": 4050
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};