const  XLSX = require('xlsx');
exports.convertDataExcelToArray =  (req)  => {
    var workbook = XLSX.readFile(`${process.cwd()}/uploads/` + req.file.filename);
    var sheet_name_list = workbook.SheetNames;
    var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    return data;
}   