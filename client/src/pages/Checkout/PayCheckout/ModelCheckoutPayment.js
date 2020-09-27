import React from 'react';
import { Modal, Button } from 'antd';

import './ModelCheckoutPayment.scss';

import PaymentForm from './PaymentForm';
class ModelCheckoutPayment extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{
            width: '100%',
            marginTop: '2rem',
            fontSize: '1.4rem',
            backgroundColor: '#e7ab3c',
            border: 'none',
          }}
        >
          <i className="fa fa-credit-card"></i>
          &nbsp; Check Out By Credit Card
        </Button>

        <Modal
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <PaymentForm />
        </Modal>
      </>
    );
  }
}
export default ModelCheckoutPayment;
