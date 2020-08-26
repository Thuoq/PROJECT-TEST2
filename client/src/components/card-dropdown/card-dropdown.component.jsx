import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {selectCurrentUser} from '../../redux/user/user.selector';
import { toggleCartHidden, deleteItemToCart } from '../../redux/cart/cart.action';
import { selectCartItem } from '../../redux/cart/cart.selector';
import ItemDropdown from './item-dropdown.component';
import './card-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartDropDown = ({currentUser, history, toggleCartHidden, cartItems ,deleteItemToCart,}) => (
  <div className="cart-dropdown">
    <div className="cart-items" style={cartItems.length >= 3 ? { overflowY: 'scroll', height:'100%' } : {}}>
      {
        !cartItems.length ? (<span className="empty-message">Your cart is empty</span>)
          : cartItems.map((el,idx) => <ItemDropdown deleteItemToCart = {deleteItemToCart} cartItem={el} key ={idx}/>)
      }
    </div>
    <Button type="primary" 
      onClick = {() => {
        toggleCartHidden()
        if(currentUser) {
          history.push('/checkout') 
        }else {
          history.push('/signInSignUp')
        }
      }}>
      GO TO CHECKOUT
    </Button>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  deleteItemToCart : cartItem => dispatch(deleteItemToCart(cartItem))
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItem,
  currentUser : selectCurrentUser
});

CartDropDown.propTypes = {
  toggleCartHidden : PropTypes.func,
  deleteItemToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currentUser: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func
  })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));
