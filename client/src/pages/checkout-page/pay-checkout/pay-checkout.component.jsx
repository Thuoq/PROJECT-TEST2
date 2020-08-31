import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ModelCheckout from './model-checkout.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import './pay-checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectTotalPrice } from '../../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../../redux/user/user.selector';

const PayCheckOut = ({
  totalItem, currentUser, history,
}) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="pay-container">
      <h2>Order Summary</h2>
      <div>
        <p>Total : </p>
        <p>
          {totalItem}
          $
        </p>
      </div>
      <Button type="primary" style={{ width: '100%' }} 
        onClick={() => (!
          currentUser ? 
          history.push('/signInSignUp') 
          : setVisible(!visible))}>
        Check Out
      </Button>
      <ModelCheckout visible = {visible} setVisible = {setVisible}/>
    </div>
)};

const mapStateToProps = createStructuredSelector({
  totalItem: selectTotalPrice,
  currentUser: selectCurrentUser,
});

PayCheckOut.propTypes = {
  totalItem: PropTypes.number,
  currentUser: PropTypes.object,
  history: PropTypes.shape({
    push : PropTypes.func
  }),
}

export default withRouter(connect(mapStateToProps)(PayCheckOut));
