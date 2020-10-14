import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

import { formItemLayout } from '../FormLayout';
import { updateContentProductStart } from '../../redux/shop/shop.action';
import { connect } from 'react-redux';

const FormEditProduct = ({ record, updateContentProductStart }) => {
  const onFinish = (values) => {
    const contentProduct = Object.assign({}, values, {
      _id: record._id,
    });
    updateContentProductStart(contentProduct);
  };
  return (
    <Form
      {...formItemLayout}
      initialValues={{
        nameEN: record.nameEN,
        nameVN: record.nameVN,
        priceUSD: parseFloat(record.priceUSD),
        weight: parseFloat(record.weight),
        origin: record.origin,
      }}
      name="nest-messages"
      onFinish={onFinish}
    >
      <Form.Item
        name="nameEN"
        label="Name EN"
        rules={[
          {
            required: true,
            message: 'Product must name EN',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item name="nameVN" label="name VN">
        <Input.TextArea autoSize={true} />
      </Form.Item>
      <Form.Item
        name="origin"
        label="Origin"
        rules={[
          {
            required: true,
            message: 'Product must have Origin',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="weight"
        label="Weight"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 200,
            message: 'Product weight not > 200',
          },
        ]}
        hasFeedback
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="priceUSD"
        label="Price USD"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 1000,
            message: 'Product priceUSD not > 100',
          },
        ]}
        hasFeedback
      >
        <InputNumber />
      </Form.Item>
      <Form.Item label="Image">
        <img
          src={record.photoURL}
          style={{ width: '20rem', height: '20rem' }}
          alt="TEST_IMAGE"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateContentProductStart: (data) =>
    dispatch(updateContentProductStart(data)),
});

export default connect(null, mapDispatchToProps)(FormEditProduct);
