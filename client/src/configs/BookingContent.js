import React from 'react';
import moment from 'moment';
import { Popconfirm, Button, message, Tag } from 'antd';

const preFix = (classConstructor) => [
  {
    title: 'IdOrder',
    dataIndex: '_id',
    width: 250,

    render(_, row) {
      return {
        children: <Tag color="magenta">{row._id}</Tag>,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'Date',
    dataIndex: 'createAt',
    sorter: (a, b) =>
      moment(a.createAt, 'MMMM Do YYYY, h:mm:ss a') -
      moment(b.createAt, 'MMMM Do YYYY, h:mm:ss a'),
    width: 300,

    render(_, row) {
      return {
        children: <Tag color="magenta">{row.createAt}</Tag>,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
    render(_, row) {
      return {
        children: <Tag color="#2db7f5">{row.name}</Tag>,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'Phone Customer',
    dataIndex: 'phoneNumber',
    ellipsis: true,
    width: 150,
    render(_, row) {
      return {
        children: <Tag color="#108ee9">{row.phoneNumber}</Tag>,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'Address Ship',
    dataIndex: 'address',
    ellipsis: true,
    width: 250,
    render(_, row) {
      return {
        children: <Tag color="magenta">{row.address}</Tag>,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'ITEM_DESCRIPTION_EN',
    dataIndex: 'nameEN',
    ellipsis: true,
    width: 500,
  },
  {
    title: 'ITEM_DESCRIPTION',
    dataIndex: 'nameVN',
    ellipsis: true,
    width: 600,
  },
  {
    title: 'ORDER_NET_WEIGHT',
    dataIndex: 'weight',
    ellipsis: true,
    width: 250,
  },
  {
    title: 'ORDER_GROSS_WEIGHT',
    dataIndex: 'totalWeight',
    ellipsis: true,
    width: 250,
    render(_, row) {
      return {
        children: <Tag color="volcano">{row.totalWeight}</Tag>,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'ITEM_FACTORY_COUNTRY',
    dataIndex: 'origin',
    ellipsis: true,
    width: 250,
    render: (text) =>
      text === 'Trung Quốc' ? (
        <Tag color="volcano">{text}</Tag>
      ) : (
        <Tag color="geekblue">{text}</Tag>
      ),
  },
  {
    title: 'ORDER_QUANTITY',
    dataIndex: 'quantity',
    ellipsis: true,
    width: 150,
    render(_, row) {
      return {
        children: row.quantity,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'AMOUNT',
    dataIndex: 'priceUSD',
    width: 150,
  },
  {
    title: 'Total',
    dataIndex: 'totalMoney',
    width: 150,
    render(_, row) {
      return {
        children: (
          <Tag color="magenta">
            {Math.round(row.quantity * row.priceUSD * 100) / 100}$
          </Tag>
        ),
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'Getting Product',
    dataIndex: 'isGettingProduct',
    key: 'isGettingProduct',
    ellipsis: true,
    width: 150,
    fixed: 'right',
    render: (text, record) => {
      let status = 'isGettingProduct';
      if (record.isGettingProduct) {
        return <h2>Done</h2>;
      }

      return (
        <Popconfirm
          title="Are you sure Is Complete ?"
          okText="Yes"
          cancelText="No"
          onCancel={() => message.error('U click on No')}
          onConfirm={() =>
            classConstructor.handleComplete({
              key: record.key,
              id: record._id,
              status,
            })
          }
        >
          <Button type="primary">Complete</Button>
        </Popconfirm>
      );
    },
  },
  {
    title: 'Shipping Product',
    dataIndex: 'isShippingProduct',
    key: 'delete',
    ellipsis: true,
    width: 150,
    fixed: 'right',
    render: (text, record) => {
      if (record.isShippingProduct) {
        return <h2>Done</h2>;
      }
      let status = 'isShippingProduct';
      return (
        <Popconfirm
          title="Are you sure Is Complete ?"
          okText="Yes"
          cancelText="No"
          onCancel={() => message.error('U click on No')}
          onConfirm={() =>
            classConstructor.handleComplete({
              key: record.key,
              id: record._id,
              status,
            })
          }
        >
          <Button type="primary">Complete</Button>
        </Popconfirm>
      );
    },
  },
  {
    title: 'Received Product',
    dataIndex: 'isReceivedProduct',
    key: 'delete',
    ellipsis: true,
    width: 150,
    fixed: 'right',
    render: (text, record) => {
      let status = 'isReceivedProduct';
      if (record.isReceivedProduct) {
        return <h2>Done</h2>;
      }
      return (
        <Popconfirm
          title="Are you sure Is Complete ?"
          okText="Yes"
          cancelText="No"
          onCancel={() => message.error('U click on No')}
          onConfirm={() =>
            classConstructor.handleComplete({
              key: record.key,
              id: record._id,
              status,
            })
          }
        >
          <Button type="primary">Complete</Button>
        </Popconfirm>
      );
    },
  },
];

export default preFix;
