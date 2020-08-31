import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import windowSize from 'react-window-size';
import { createStructuredSelector } from 'reselect';
import {
  ShoppingOutlined, HomeOutlined, ShopOutlined, LoginOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartHidden, selectTotalQuantity } from '../../redux/cart/cart.selector';
import NavigationUser from './navigation-user.component';


class RightNavigation extends React.Component {
  
  render(){
    const {windowWidth, currentUser, toggleCartHidden, totalQuantity, ...props} = this.props;
    return(
      <Menu
        theme="dark" 
        mode={windowWidth <= 900 ? 'inline' : 'horizontal'}
      >
    <Menu.Item
      style={{ height: '100%' }}
      key="1"
      icon={(
        // FIXED ROUTER 
        <Link to="/">
          <HomeOutlined style={{ fontSize: '2.5rem', paddingTop: '1rem' }} />
          Home
        </Link>
      )}
    >
      {' '}

    </Menu.Item>
    <Menu.Item
      style={{ height: '100%' }}
      icon={(
        <Link to="/shop">
          <ShopOutlined
            style={{ fontSize: '2.5rem', paddingTop: '1rem' }}
          />
          Product
        </Link>
        )}
      key="2"
    />
    <Menu.Item
      style={{ height: '100%' }}
      icon={(
        <span onClick={() => toggleCartHidden()} style={{ position: 'relative' }}>
          <ShoppingOutlined
            style={{ fontSize: '3rem', paddingTop: '1rem' }}

          />
          <span className="nav-quantity">{totalQuantity}</span>
          Cart
        </span>

        )}
      key="3"
    />
    {
      currentUser ? 
      <NavigationUser {...props}  currentUser={currentUser} /> 
      : (
        <Menu.Item
          style={{ height: '100%' }}
          icon={(
            <Link to="/signInSignUp">
              <LoginOutlined
                style={{ fontSize: '2.5rem', paddingTop: '1rem' }}
              />
              Log In
            </Link>
        )}
          key="4"
        />
      )
    }
  </Menu>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  totalQuantity: selectTotalQuantity,
});

RightNavigation.propTypes = {
  currentUser: PropTypes.object,
  toggleCartHidden: PropTypes.func,
  totalQuantity: PropTypes.number
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default (connect(mapStateToProps, mapDispatchToProps)(windowSize(RightNavigation)));
