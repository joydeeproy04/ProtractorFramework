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
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "http://juliemr.github.io/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)",
                "timestamp": 1528281687076,
                "type": ""
            }
        ],
        "screenShotFile": "screenshots\\0022005e-001c-0021-0037-007100fb008a.png",
        "timestamp": 1528281684180,
        "duration": 2891
    },
    {
        "description": "The first number field gets populated with a number i.e. 5|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0001008f-0070-0085-00fc-003200bd0060.png",
        "timestamp": 1528281687898,
        "duration": 1203
    },
    {
        "description": "The second number field gets populated with a number i.e. 6|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\009400ed-0053-00e6-00ef-0096005e00a6.png",
        "timestamp": 1528281689593,
        "duration": 101
    },
    {
        "description": "The Operator Button should be present and clicked in order to choose an operator|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0053000a-0055-0024-0088-00150075007d.png",
        "timestamp": 1528281690000,
        "duration": 135
    },
    {
        "description": "MULTIPLICATION Operator should be selected|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00c1001a-0058-008e-0053-000700c9009a.png",
        "timestamp": 1528281690448,
        "duration": 92
    },
    {
        "description": "GO Button should be present and clicked|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\006f00c4-004d-00ed-00ab-007f00a20088.png",
        "timestamp": 1528281690812,
        "duration": 1291
    },
    {
        "description": "The Product of 5 and 6 should equal to 30|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00cc008e-00a4-0016-0036-0031006a00e5.png",
        "timestamp": 1528281692448,
        "duration": 4060
    },
    {
        "description": "Browser should get launched with the url http://juliemr.github.io/protractor-demo/|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00810080-0007-00ce-000b-00da001c003c.png",
        "timestamp": 1528281696794,
        "duration": 311
    },
    {
        "description": "The first number field gets populated with a number i.e. 5|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\0049005d-0063-00c9-004b-001a005200a8.png",
        "timestamp": 1528281697383,
        "duration": 1180
    },
    {
        "description": "The second number field gets populated with a number i.e. 6|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\003700bc-00ea-0055-0001-00cc00450003.png",
        "timestamp": 1528281698853,
        "duration": 76
    },
    {
        "description": "The Operator Button should be present and clicked in order to choose an operator|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\00af009e-0031-0078-00d3-009700a2005c.png",
        "timestamp": 1528281699218,
        "duration": 120
    },
    {
        "description": "MULTIPLICATION Operator should be selected|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\006200b5-00b8-00b2-0003-00f5003a0042.png",
        "timestamp": 1528281699624,
        "duration": 87
    },
    {
        "description": "GO Button should be present and clicked|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "screenshots\\005b0052-00b1-0071-007f-00be00dd00be.png",
        "timestamp": 1528281699980,
        "duration": 1196
    },
    {
        "description": "The Product of 5 and 6 should equal to 30|Sample Test Case for Protractor Framework",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 172680,
        "browser": {
            "name": "chrome",
            "version": "66.0.3359.181"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "screenshots\\000a0043-00da-009d-0075-00e900e7005c.png",
        "timestamp": 1528281701470,
        "duration": 4048
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