import React from 'react';
//import PropTypes from 'prop-types';

import { Form, Input, Button, Divider } from 'antd';
import { LockOutlined } from '@ant-design/icons';
//import { connect } from 'react-redux';
//import { signInStart } from '../../redux/user/user.action';

const ResetPassword = ({ signInStart }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // signInStart(values);
    form.resetFields();
  };

  return (
    <div className="containerSignInSignUp">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        form={form}
        style={{
          padding: '1rem',
          textAlign: 'center',
          background: 'white',
          boxShadow: ' 0 1rem 2rem rgba(0,0,0,0.2)',
        }}
      >
        <Divider
          style={{
            marginBottom: '5rem',
          }}
          orientation="center"
        >
          <h2
            style={{
              fontSize: '2.4rem',
              fontWeight: 700,
              color: '#d4b106',
            }}
          >
            Enter New Password
          </h2>
        </Divider>
        <Form.Item
          name="password"
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
            placeholder="password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          hasFeedback
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
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              width: '100%',
              backgroundColor: '#d4b106',
              borderColor: '#d4b106',
            }}
          >
            Change password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   signInStart: (emailAndPassword) => dispatch(signInStart(emailAndPassword)),
// });
//connect(null, mapDispatchToProps)(SignIn);
export default ResetPassword;
