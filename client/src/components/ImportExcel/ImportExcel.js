import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { URL, ADMIN_API } from '../../constants/api';
import { getToken } from '../../helpers/auth';

const ImportExcel = ({ endPoint }) => {
  const props = {
    name: 'file',
    action: `${URL}${ADMIN_API}${endPoint}`,
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(
          `${info.file.name} file upload failed. OR AUTH EXPIRED U Try Login Again`
        );
      }
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>
        Click to Upload{' '}
        {endPoint === '/upload-booking' ? 'Upload Booking' : 'Upload Product'}
      </Button>
    </Upload>
  );
};

export default ImportExcel;
