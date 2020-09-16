import React from 'react';
import { connect } from 'react-redux';

import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './NavigationTop.scss';
import { createStructuredSelector } from 'reselect';
import NavigationSearch from './NavigationSearch';
import NavigationCategory from './NavigationCategory';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

const NavigationTop = ({ currentUser, signOut }) => (
  <>
    <div className="header-top">
      <div className="container animate__animated animate__zoomIn">
        <div className="ht-left">
          <div className="mail-service">
            <MailOutlined style={{ marginRight: '0.5rem', color: '#252525' }} />
            example@gmail.com
          </div>
          <div className="phone-service">
            <PhoneOutlined
              style={{ marginRight: '0.5rem', color: '#252525' }}
            />
            + 84 983 866 14
          </div>
        </div>
        <div className="ht-right">
          {!currentUser ? (
            <Link to="/signInSignUp" className="login-panel">
              <UserOutlined
                style={{ marginRight: '0.8rem', color: '#252525' }}
              />
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/signInSignUp"
                onClick={() => signOut()}
                className="login-panel logout"
              >
                LOG OUT
              </Link>
              <Link to="/user" className="login-panel ">
                <UserOutlined style={{ marginRight: '0.8rem' }} />
                {currentUser.name.toUpperCase()}
              </Link>
            </>
          )}
          <div className="top-social">
            <a href="https://www.facebook.com/hthuongh1939203" target="blank">
              <i className="fa fa-facebook" />
            </a>
            <a href="https://www.instagram.com/cownnut/" target="blank">
              <i className="fa fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <NavigationSearch />
    <NavigationCategory />

    <br />
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTop);
