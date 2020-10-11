import { Button } from 'antd';
import React from 'react';
const COLUMNS = [
  {
    title: 'Id',
    dataIndex: 'Id Product',
  },
  {
    title: 'Name EN',
    dataIndex: 'nameEN',
  },
  {
    title: 'Name VN',
    dataIndex: 'nameVN',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
  },
  {
    title: 'Price VN',
    dataIndex: 'priceVN',
  },
  {
    title: 'Photo Product ',
    dataIndex: 'photoUrl',
  },
  {
    title: 'Edit Product',
    dataIndex: 'Edit Product',
    ellipsis: true,
    width: 150,
    fixed: 'right',
    render: () => {
      return <Button>Edit Product</Button>;
    },
  },
];

export default COLUMNS;
