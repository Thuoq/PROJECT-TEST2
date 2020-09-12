import React  from 'react';
import PropTypes from 'prop-types';


import { Form, Input, Button  , Divider} from 'antd';
import {  LockOutlined } from '@ant-design/icons';
import { signInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const SignIn  =  ({signInStart}) => {
  const [form]  = Form.useForm()
  
  const onFinish = values => { 
    signInStart(values);
    form.resetFields(); 
  };

  return (
   
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        form = {form}
        style={{
          padding: '1rem',
          textAlign:'center',
          background: "white",
          boxShadow:" 0 1rem 2rem rgba(0,0,0,0.2)"
        }}
      >
        <Divider style={{
          marginBottom: '5rem'
        }} orientation='center'>
          <h2 style={{
            fontSize:'2.4rem',
            fontWeight:700,
            color: '#d4b106'
          }}>Login</h2>
        </Divider>
        
        <p style={{
          color: "#777",
          fontWeight: 300
        }}> Welcome back! Sign in to your account</p>
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
            prefix={<i className="fa fa-envelope site-form-item-icon" />}
            placeholder="E-mail"
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
      

        <Form.Item >
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              width:'100%',
              backgroundColor: "#d4b106",
              borderColor: "#d4b106"
            }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
 
  )
}

const mapDispatchToProps = dispatch => ({
  signInStart : emailAndPassword => dispatch(signInStart(emailAndPassword)),
})


SignIn.propTypes = {
  signInStart: PropTypes.func,
  isLoading: PropTypes.bool
}

export default connect(null,mapDispatchToProps)(SignIn);