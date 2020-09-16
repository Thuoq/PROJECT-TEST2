import React from 'react';
import PropTypes from 'prop-types';
import FormUpdatePhone from './FormUpdatePhone';
import { connect } from 'react-redux';
import { Form, Input, Button, Popconfirm, InputNumber, Modal } from 'antd';
import { red } from '@ant-design/colors';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

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
          onFinish={(values) => console.log(values)}
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
            <Popconfirm
              title="Are you sure change your password?"
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                style={{
                  backgroundColor: `${red[5]}`,
                  borderColor: `${red[5]}`,
                }}
              >
                Change Password
              </Button>
            </Popconfirm>
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
