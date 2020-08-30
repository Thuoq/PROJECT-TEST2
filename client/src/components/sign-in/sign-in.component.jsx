import React  from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectIsLoadingUser } from '../../redux/user/user.selector';

import { Form, Input, Button ,Spin} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const SignIn  =  ({signInStart,isLoading}) => {
  const [form]  = Form.useForm()
  
  const onFinish = values => { 
    signInStart(values);
    form.resetFields(); 
  };

  return (
    <Spin
    spinning ={isLoading}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        form = {form}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!"
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!"
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
      

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  )
}

const mapDispatchToProps = dispatch => ({
  signInStart : emailAndPassword => dispatch(signInStart(emailAndPassword)),
})
const mapStateToProps = createStructuredSelector({
  isLoading : selectIsLoadingUser,
})

SignIn.propTypes = {
  signInStart: PropTypes.func,
  isLoading: PropTypes.bool
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);