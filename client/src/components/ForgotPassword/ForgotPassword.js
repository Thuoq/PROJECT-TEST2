import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Divider } from 'antd';
import './ForgotPassword.scss';
const ForgotPassword = ({ forgotPasswordStart }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    forgotPasswordStart(values);
    form.resetFields();
  };
  return (
    <div className="containerSignInSignUp">
      <Form
        name="normal_login"
        className="login-form"
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
            Type Your Email
          </h2>
        </Divider>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<i className="fa fa-envelope site-form-item-icon" />}
            placeholder="E-mail"
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
            Submit Email
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
ForgotPassword.propTypes = {
  forgotPasswordStart: PropTypes.func.isRequired,
};

export default ForgotPassword;
