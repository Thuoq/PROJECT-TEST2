import React from 'react';
import moment from 'moment';
import { Popconfirm, Button, message, Tag } from 'antd';

const preFix = (classConstructor) => [
  {
    title: 'Date',
    dataIndex: 'createAt',
    sorter: (a, b) =>
      moment(a.createAt, 'MMMM Do YYYY, h:mm:ss a') -
      moment(b.createAt, 'MMMM Do YYYY, h:mm:ss a'),
    width: 250,
    ellipsis: true,
    fixed: 'left',
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
    fixed: 'left',
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
    title: 'BOX_NO',
    dataIndex: 'boxNo',
    width: 150,
    render: () => <p>BOX NO</p>,
  },
  {
    title: 'PACKAGE_QTY',
    dataIndex: 'quantity',
    ellipsis: true,
    width: 150,
  },
  {
    title: 'ORDER_ITEM',
    dataIndex: 'idProduct',
    ellipsis: true,
    width: 150,
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
    width: 600,
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
    title: 'UOM',
    dataIndex: 'uom',
    width: 150,
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
        children: <Tag color="magenta">{row.totalMoney}</Tag>,
        props: {
          rowSpan: row.rowSpan,
        },
      };
    },
  },
  {
    title: 'ORDER_CURR_CODE',
    dataIndex: 'orderCurrCode',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'SHIP_FROM_PORT',
    dataIndex: 'shipFormPort',
    ellipsis: true,
    width: 200,
  },
  {
    title: 'isComplete',
    dataIndex: 'isComplete',
    key: 'delete',
    ellipsis: true,
    width: 150,
    fixed: 'right',
    render: (text, record) => {
      console.log(this);
      if (record.isCompleted) {
        return <h2>Done</h2>;
      }
      return (
        <Popconfirm
          title="Are you sure Is Complete ?"
          okText="Yes"
          cancelText="No"
          onCancel={() => message.error('U click on No')}
          onConfirm={() =>
            classConstructor.handleComplete({ key: record.key, id: record._id })
          }
        >
          <Button type="primary">Complete</Button>
        </Popconfirm>
      );
    },
  },
];

export default preFix;
