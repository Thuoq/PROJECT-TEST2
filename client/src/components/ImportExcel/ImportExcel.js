import React from 'react';

import * as XLSX from 'xlsx';

class ImportExcel extends React.Component {
  state = {
    dataBooking: [],
  };
  handleChange = (e) => {
    e.preventDefault();
    const fileUpload = e.target;
    const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
      if (typeof FileReader !== 'undefined') {
        const reader = new FileReader();
        if (reader.readAsBinaryString) {
          reader.onload = () => {
            this.processExcel(reader.result);
          };
          reader.readAsBinaryString(fileUpload.files[0]);
        }
      } else {
        console.log('This browser does not support HTML5.');
      }
    } else {
      console.log('Please upload a valid Excel file.');
    }
  };
  processExcel(data) {
    const workbook = XLSX.read(data, { type: 'binary' });
    const firstSheet = workbook.SheetNames[0];
    const excelRows = XLSX.utils.sheet_to_row_object_array(
      workbook.Sheets[firstSheet]
    );

    this.setState({
      dataBooking: excelRows,
    });
  }
  render() {
    return (
      <input
        className="upload-excel"
        type="file"
        id="fileUpload"
        onChange={this.handleChange}
      />
    );
  }
}
export default ImportExcel;
