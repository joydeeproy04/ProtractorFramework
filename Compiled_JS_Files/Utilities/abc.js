function writeExcelData(testName, sheetName, columnName, value) {
    var excelFile = require('xlsx-populate');
    excelFile.fromFileAsync('./Data/Data.xlsx').then(function (workbook) {
        var sheet = workbook.sheet(sheetName);
        // const rowCount = sheet.usedRange().value();
        // console.log(rowCount);
        var cell = sheet.row(testName).cell(columnName);
        cell.value(value);
        // for(let i = 0; i < rowCount; i++){
        //     console.log(sheet.row(i).column(1).columnName());
        // }
        // if(sheet.column.columnName().toEqual(columnName)){
        // }
        workbook.sheet(sheetName).cell('H2').value(value);
    });
}
//# sourceMappingURL=abc.js.map