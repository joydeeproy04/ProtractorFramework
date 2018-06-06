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
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00cc007e-00e2-0046-0089-009300cb001e.png",
        "timestamp": 1528285182184,
        "duration": 10775
    },
    {
        "description": "The first number field gets populated with a number i.e. 5|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00980018-0070-00b2-007f-0067004a00f1.png",
        "timestamp": 1528285193406,
        "duration": 1200
    },
    {
        "description": "The second number field gets populated with a number i.e. 6|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00ca0004-0065-0004-0031-003900a30094.png",
        "timestamp": 1528285195252,
        "duration": 148
    },
    {
        "description": "The Operator Button should be present and clicked in order to choose an operator|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0091009a-0084-0067-008e-007b00030085.png",
        "timestamp": 1528285195877,
        "duration": 118
    },
    {
        "description": "MULTIPLICATION Operator should be selected|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\001e0004-00a6-006d-0062-00b0006100cb.png",
        "timestamp": 1528285196369,
        "duration": 89
    },
    {
        "description": "GO Button should be present and clicked|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\008a00fd-00e9-0091-00e9-00a700320024.png",
        "timestamp": 1528285196794,
        "duration": 1186
    },
    {
        "description": "The Product of 5 and 6 should equal to 30|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots\\002500fd-0085-00e0-0083-007500270022.png",
        "timestamp": 1528285198324,
        "duration": 4055
    },
    {
        "description": "Browser should get launched with the url http://juliemr.github.io/protractor-demo/|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0090006b-0079-00ec-00f8-0013006900da.png",
        "timestamp": 1528285202713,
        "duration": 136
    },
    {
        "description": "The first number field gets populated with a number i.e. 5|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\005e00f6-0054-00b4-0019-000500ac002e.png",
        "timestamp": 1528285203181,
        "duration": 1154
    },
    {
        "description": "The second number field gets populated with a number i.e. 6|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00a600bf-0026-0065-004d-00560061001a.png",
        "timestamp": 1528285204719,
        "duration": 86
    },
    {
        "description": "The Operator Button should be present and clicked in order to choose an operator|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00070061-00a2-0011-0087-00d7003200bb.png",
        "timestamp": 1528285205166,
        "duration": 115
    },
    {
        "description": "MULTIPLICATION Operator should be selected|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0034004c-0054-0067-0004-008900520053.png",
        "timestamp": 1528285205663,
        "duration": 93
    },
    {
        "description": "GO Button should be present and clicked|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\006e0002-001b-0095-0074-005600fe009e.png",
        "timestamp": 1528285206080,
        "duration": 1181
    },
    {
        "description": "The Product of 5 and 6 should equal to 30|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 120232,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00fd00b3-0057-0065-005d-00a0000500d1.png",
        "timestamp": 1528285207624,
        "duration": 4061
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