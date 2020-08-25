import React from 'react';
import {connect} from 'react-redux';
import {
  Form, Input, Button,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import {  selectAddressName, selectCurrentUser } from '../../redux/user/user.selector';

const AddAddressUser = ({selectAddressName,currentUser}) => {
  const addressName = currentUser.address.map(el => el.name)
  return(
  <Form 
  layout="horizontal" 
  style={{ flex: ' 0 0 50%' }} initialValues = {{address: [addressName]}}>
    <Form.Item>
      <Form.List name="address">
      {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Form.Item
                  
                  label={ `Address ${index + 1}` }
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input Add Address or Delete this Address."
                      }
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="Address details"
                      style={{ width: "60%" }}
                    />
                  </Form.Item>
                  {fields.length >= 1 ? (
                    <>
                      
                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                        style = {{marginLeft:'1rem'}}
                      />
                    </> 
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: "60%" }}
                >
                  <PlusOutlined   /> Add Address
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </Form.Item>
  </Form>
)};


const mapStateToProps = createStructuredSelector({
  addressName : selectAddressName,
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(AddAddressUser) ;
