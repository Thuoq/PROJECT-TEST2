import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import './pay-checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectTotalPrice } from '../../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import { toggleModelCheckOut } from '../../../redux/check-out/check-out.action';

const PayCheckOut = ({
  totalItem, currentUser, history, toggleModelCheckOut,
}) => (
  <div className="pay-container">
    <h2>Order Summary</h2>
    <div>
      <p>Total : </p>
      <p>
        {totalItem}
        $
      </p>
    </div>
    <Button type="primary" style={{ width: '100%' }} onClick={() => (!currentUser ? history.push('/signInSignUp') : toggleModelCheckOut())}>Check Out</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalItem: selectTotalPrice,
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  toggleModelCheckOut: () => dispatch(toggleModelCheckOut())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PayCheckOut));
