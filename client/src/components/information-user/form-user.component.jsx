import React, { useState } from 'react';
import {connect} from 'react-redux';
import {
  Form, Input, Button, InputNumber, Popconfirm,
} from 'antd';
import { red } from '@ant-design/colors';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';


const FormUser = ({currentUser,...props}) => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{ flex: ' 0 0 50%' }}
    >
      <Form.Item label="User Name">
        <Input defaultValue={currentUser.name}  disabled ={true}/>
      </Form.Item>
      <Form.Item label="Phone Number">
        <InputNumber  defaultValue={`${currentUser.phoneNumber}`}   style={{ width: '70%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary"> Update Me</Button>
        &nbsp;
        &nbsp;
        <Popconfirm
          title="Are you sure change your password?"
        //   onConfirm={confirm}
        //   onCancel={cancel}
          okText="Yes"
          cancelText="No"

        >
          <Button type="primary" style={{ backgroundColor: `${red[5]}`, borderColor: `${red[5]}` }}>Change Password</Button>
        </Popconfirm>

      </Form.Item>
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(FormUser) ;
