import React from 'react';
import moment from 'moment';
import ModelPrint from './ModelPrint';
import ModelCard from './ModelCard';
import { Popconfirm, Button, message, Tag } from 'antd';

// import Pdf from 'react-to-pdf';

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
    width: 250,
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
    width: 700,
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
    width: 200,
  },
  {
    title: 'ITEM_DESCRIPTION',
    dataIndex: 'nameVN',
    ellipsis: true,
    width: 800,
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
    title: 'Price USD ',
    dataIndex: 'priceUSD',
    width: 150,
  },
  {
    title: 'Total Money ',
    dataIndex: 'totalMoney',
    width: 150,
    render(_, row) {
      return {
        children: <Tag color="magenta">{row.quantity.toFixed(2)}$</Tag>,
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
              isGettingProduct: record.isGettingProduct,
            })
          }
        >
          <Button type="primary">
            {record.isGettingProduct ? 'Undo' : 'Complete'}
          </Button>
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
              isShippingProduct: record.isShippingProduct,
            })
          }
        >
          <Button type="primary">
            {record.isShippingProduct ? 'Undo' : 'Complete'}
          </Button>
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
              isReceivedProduct: record.isReceivedProduct,
            })
          }
        >
          <Button type="primary">
            {record.isReceivedProduct ? 'Undo' : 'Complete'}
          </Button>
        </Popconfirm>
      );
    },
  },
  {
    title: 'Detail Payment Card',
    dataIndex: 'numberPaymentCard',
    key: 'pdf',
    ellipsis: true,
    width: 180,
    fixed: 'right',
    render: (text, record, _id) => {
      const userInfo = {
        name: record.name,
        totalMoney: record.totalMoney,
        creditCard: record.numberPaymentCard,
      };
      return <ModelPrint key={_id} userInfo={userInfo} />;
    },
  },
  {
    title: 'Detail About Card',
    dataIndex: 'numberPaymentCard',
    key: 'table',
    ellipsis: true,
    width: 180,
    fixed: 'right',
    render: (text, record) => {
      return <ModelCard productDetail={record} />;
    },
  },
];

//ExportCSV

export default preFix;
