import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Form, Input, Button, Divider } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { signUpStart } from '../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    signUpStart(values);
    form.resetFields();
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      className="login-form"
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
          Register
        </h2>
      </Divider>

      <p
        style={{
          color: '#777',
          fontWeight: 300,
        }}
      >
        {' '}
        Create your very own account
      </p>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
          {
            message: 'Max 20 characters and min 9 characters',
            min: 9,
            max: 20,
          },
        ]}
      >
        <Input
          placeholder="E-mail"
          prefix={<i className="fa fa-envelope site-form-item-icon " />}
        />
      </Form.Item>

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

      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your nickname',
            whitespace: true,
          },
          {
            type: 'string',
            message: 'Name is not Number',
          },
          {
            message: 'Max 15 characters and min 9 characters',
            min: 9,
            max: 15,
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Nick Name"
        />
      </Form.Item>

      <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: 'Please provide your Address ! ',
          },
          {
            message: ' Max characters 15',
            min: 9,
            max: 15,
          },
        ]}
      >
        <Input
          prefix={<HomeOutlined className="site-form-item-icon" />}
          placeholder="Address"
        />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
          () => ({
            validator(rule, value) {
              const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
              if (vnf_regex.test(value) === false) {
                return Promise.reject('Phone Number is valid !');
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input
          placeholder="Phone Number"
          prefix={<PhoneOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item>
        <Button
          style={{
            width: '100%',
            backgroundColor: '#d4b106',
            borderColor: '#d4b106',
          }}
          type="primary"
          htmlType="submit"
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

SignUp.propTypes = {
  signUpStart: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default connect(null, mapDispatchToProps)(SignUp);
