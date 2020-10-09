import React from 'react';

import { Radio } from 'antd';

const RadioBooking = ({ handleChangeStatus }) => (
  <Radio.Group
    defaultValue=""
    size="large"
    onChange={(e) => handleChangeStatus(e.target.value)}
  >
    <Radio value="">All</Radio>
    <Radio value="isGettingProduct">Getting Product</Radio>
    <Radio value="isShippingProduct">Shipping Product</Radio>
    <Radio value="isReceivedProduct">Received Product</Radio>
  </Radio.Group>
);

export default RadioBooking;
