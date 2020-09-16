import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Form, Input, Button } from 'antd';
import { updatePhoneNumberStart } from '../../redux/user/user.action';

const FormUpdatePhone = ({ updatePhoneNumberStart, handleCancel }) => {
  const onFinish = (values) => {
    updatePhoneNumberStart(values);

    handleCancel();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <Form name="register" onFinish={onFinish} scrollToFirstError>
      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[
          () => ({
            validator(rule, value) {
              const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
              if (vnf_regex.test(value) === false) {
                return Promise.reject('Phone number is valid !');
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update Your Phone Number
        </Button>
      </Form.Item>
    </Form>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updatePhoneNumberStart: (addressObj) =>
    dispatch(updatePhoneNumberStart(addressObj)),
});

FormUpdatePhone.propsType = {
  updatePhoneNumberStart: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FormUpdatePhone);
