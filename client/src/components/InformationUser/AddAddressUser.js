import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Form, Input } from 'antd';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

const AddAddressUser = ({ currentUser }) => {
  const addressName = currentUser.address.map((el) => el.name);
  return (
    <Form
      layout="horizontal"
      style={{ flex: ' 0 0 50%' }}
      initialValues={{ address: [...addressName] }}
    >
      <Form.Item>
        <Form.List name="address">
          {(fields) => (
            <div>
              {fields.map((field, index) => (
                <Form.Item
                  label={`Address ${index + 1}`}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          'Please input Add Address or Delete this Address.',
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="Address details"
                      style={{ width: '60%' }}
                    />
                  </Form.Item>
                </Form.Item>
              ))}
            </div>
          )}
        </Form.List>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

AddAddressUser.propTypes = {
  currentUser: PropTypes.shape({
    address: PropTypes.array,
  }),
};

export default connect(mapStateToProps)(AddAddressUser);
