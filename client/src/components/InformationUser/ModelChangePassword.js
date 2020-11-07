import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { red } from '@ant-design/colors';
import { LockOutlined } from '@ant-design/icons';
import { formItemLayout } from '../../configs/FormLayout';
import { userChangePassWordStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
const ModelChangePassword = ({ userChangePassWordStart }) => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  function showModal() {
    setVisible(!visible);
  }

  function onFinish(values) {
    userChangePassWordStart(values);
    form.resetFields();
  }
  return (
    <>
      <Button
        style={{
          backgroundColor: `${red[5]}`,
          borderColor: `${red[5]}`,
        }}
        type="primary"
        onClick={showModal}
      >
        Change Password
      </Button>
      <Modal
        title="Change Your Password"
        visible={visible}
        onCancel={showModal}
        footer={null}
      >
        <Form {...formItemLayout} form={form} name="basic" onFinish={onFinish}>
          <Form.Item
            name="passwordCurrent"
            label="Current Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Enter your current password"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password Change"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Enter your new password"
            />
          </Form.Item>
          <Form.Item
            name="passwordConfirm"
            label="Password  Confirm"
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!'
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Enter confirm the new password"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...formItemLayout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userChangePassWordStart: (objPassword) =>
    dispatch(userChangePassWordStart(objPassword)),
});
ModelChangePassword.propTypes = {
  userChangePassWordStart: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ModelChangePassword);
