import React from 'react';
import PropTypes from 'prop-types';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Button, message } from 'antd';

const ExportCSV = ({ csvData, fileName }) => {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <Button
      variant="warning"
      onClick={() =>
        csvData.length
          ? exportToCSV(csvData, fileName)
          : message.error('NO DATA CHOOSE')
      }
    >
      Export Excel
    </Button>
  );
};
ExportCSV.propTypes = {
  csvData: PropTypes.array.isRequired,
  fileName: PropTypes.string.isRequired,
};
export default ExportCSV;
