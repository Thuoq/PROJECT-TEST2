import React  from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  Form, Input, Tooltip, Button,Spin
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { formItemLayout, tailFormItemLayout } from './prefixLayout';
import { signUpStart } from '../../redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingUser } from '../../redux/user/user.selector';


const SignUp = ({signUpStart,errorMessage,isLoading}) => {
  const [form] = Form.useForm();
  
  const onFinish = values => {
    signUpStart(values);
    form.resetFields();
  }
 
  return( 
    <Spin spinning ={isLoading}>
        <Form
          {...formItemLayout}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          form={form}
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
              () => ({
                  validator(rule,value) {
                    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                    if(vnf_regex.test(value) === false) {
                      return Promise.reject(
                        'Phone Number is valid !',
                      );
                    } else {
                      return Promise.resolve()
                    }
                    
                  }
              })
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
    </Spin>
  )
}

const mapStateToProps = createStructuredSelector({
 
  isLoading : selectIsLoadingUser
})

const mapDispatchToProps = dispatch => ({
  signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
})

SignUp.propTypes = {
  signUpStart: PropTypes.func,
  isLoading: PropTypes.bool
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
