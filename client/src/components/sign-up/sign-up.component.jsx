import React from 'react';
import { connect } from 'react-redux';
import {
  Form, Input, Tooltip, Button,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { formItemLayout, tailFormItemLayout } from './prefixLayout';
import { signUpStart } from '../../redux/user/user.action';
const SignUp = ({signUpStart}) => {
  const onFinish = values => {
    signUpStart(values);
  }
  return(
    <Form
    {...formItemLayout}
    name="register"
    onFinish={onFinish}
    scrollToFirstError
  >
    <Form.Item
      name="email"
      label="E-mail"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="password"
      label="Password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="confirmPassword"
      label="Confirm Password"
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
              'The two passwords that you entered do not match!',
            );
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="name"
      label={(
        <span>
          Nickname&nbsp;
          <Tooltip title="What do you want others to call you?">
            <QuestionCircleOutlined />
          </Tooltip>
        </span>
      )}
      rules={[
        {
          required: true,
          message: 'Please input your nickname!',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="address"
      label="Address"
      rules={[
        {
          required: true,
          message: 'Please provide your Address !',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="phoneNumber"
      label="Phone Number"
      rules={[
        {
          required: true,
          message: 'Please input your phone number!',
        },
      ]}
    >
      <Input
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form.Item>
  </Form>
  )
}


const mapDispatchToProps = dispatch => ({
  signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
  
})

export default connect(null,mapDispatchToProps)(SignUp) ;
