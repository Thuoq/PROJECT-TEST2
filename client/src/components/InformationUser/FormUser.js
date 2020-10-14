import React from 'react';
import PropTypes from 'prop-types';
import FormUpdatePhone from './FormUpdatePhone';
import { connect } from 'react-redux';
import { Form, Input, Button, InputNumber, Modal } from 'antd';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import ModelChangePassword from './ModelChangePassword';

class FormUser extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            phoneNumber: ['0' + currentUser.phoneNumber],
          }}
          style={{ flex: ' 0 0 50%' }}
        >
          <Form.Item label="User Name">
            <Input value={currentUser.name} disabled={true} />
          </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber">
            <InputNumber
              formatter={(value) => {
                if (value) {
                  return `0${value}`.replace(/0*/, '0');
                }
                return value;
              }}
              style={{ width: '70%' }}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick={this.showModal}>
              {' '}
              Update Phone Number
            </Button>
            &nbsp; &nbsp;
            <ModelChangePassword />
          </Form.Item>
        </Form>
        <Modal
          title={<h2 style={{ textAlign: 'center' }}>Your Phone Number </h2>}
          visible={this.state.visible}
          onOk={this.handleOk}
          footer={null}
          onCancel={this.handleCancel}
        >
          <FormUpdatePhone handleCancel={this.handleCancel} />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
FormUser.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(FormUser);
