import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { URL, BOOKING_API } from '../../constants/api';
import { getToken } from '../../helpers/auth';
const props = {
  name: 'file',

  action: `${URL}${BOOKING_API}/upload`,
  headers: {
    authorization: `Bearer ${getToken()}`,
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(
        `${info.file.name} file upload failed. OR AUTH EXPIRED U Try Login Again`
      );
    }
  },
};
const ImportExcel = () => (
  <div
    style={{
      margin: '0 auto',
      marginTop: '10rem',
    }}
  >
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload Only EXCEL</Button>
    </Upload>
  </div>
);

export default ImportExcel;
