import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

import { formItemLayout } from '../FormLayout';
import { connect } from 'react-redux';
import { updateContentBookingStart } from '../../redux/booking/booking-action';

const FormEditCard = ({ record, updateContentBookingStart }) => {
  const onFinish = (values) => {
    const content = Object.assign({}, values, {
      key: record.key,
      _id: record._id,
    });
    updateContentBookingStart(content);
  };
  return (
    <Form
      {...formItemLayout}
      initialValues={{
        name: record.name,
        address: record.address,
        quantity: record.quantity,
        totalMoney: record.totalMoney.toFixed(2),
      }}
      name="nest-messages"
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        label="Name User"
        rules={[
          {
            required: true,
            message: 'User must have name',
          },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Address Shipping">
        <Input.TextArea autoSize={true} />
      </Form.Item>
      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 200,
            message: 'Number not > 200',
          },
        ]}
        hasFeedback
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="totalMoney"
        label="Total Money"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 3000,
            message: 'Number not > 3000',
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
  updateContentBookingStart: (data) =>
    dispatch(updateContentBookingStart(data)),
});

export default connect(null, mapDispatchToProps)(FormEditCard);
