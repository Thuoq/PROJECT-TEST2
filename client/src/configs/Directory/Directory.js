import React from 'react';
import ModelEditProduct from './ModelEditProduct';
const COLUMNS = [
  {
    title: 'Id Product',
    dataIndex: '_id',
    width: 150,
  },
  {
    title: 'Name EN',
    width: 100,
    dataIndex: 'nameEN',
  },
  {
    title: 'Weight',
    width: 100,
    dataIndex: 'weight',
  },
  {
    title: 'Price VN',
    width: 100,
    dataIndex: 'priceVN',
  },
  {
    title: 'Name VN',
    dataIndex: 'nameVN',
    width: 300,
  },
  {
    title: 'Edit Product',
    dataIndex: 'Edit Product',

    width: 100,
    fixed: 'right',
    render: (text, record) => {
      return <ModelEditProduct record={record} />;
    },
  },
];

export default COLUMNS;
