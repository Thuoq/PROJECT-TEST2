import React from 'react';
import { Tabs } from 'antd';
import ImportExcel from '../ImportExcel/ImportExcel';

const { TabPane } = Tabs;

const ImportView = () => {
  const endPoints = ['/upload-booking', '/upload-product'];
  return (
    <div
      style={{
        margin: '0 auto',
        marginTop: '10rem',
      }}
    >
      <Tabs defaultActiveKey="1">
        {endPoints.map((endPoint, idx) => (
          <TabPane
            tab={idx === 0 ? 'Upload Booking' : 'Upload Product'}
            key={idx}
          >
            <ImportExcel endPoint={endPoint} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
export default ImportView;
