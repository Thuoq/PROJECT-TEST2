import React from 'react';
import { Modal, Button } from 'antd';

import './ModelCheckoutPayment.scss';

import PaymentForm from './PaymentForm';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import { withRouter } from 'react-router-dom';
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
    const { currentUser, history } = this.props;
    return (
      <>
        <Button
          type="primary"
          onClick={() =>
            currentUser ? this.showModal() : history.push('/signInSignUp')
          }
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(ModelCheckoutPayment));
