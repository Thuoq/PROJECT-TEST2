import React from 'react';
import './Spinner.scss';
import { Spin } from 'antd';

const Spinner = ({ isLoading }) => (
  <div className="spinner-overlay">
    <Spin spinning={isLoading} size="large" />
  </div>
);

export default Spinner;
