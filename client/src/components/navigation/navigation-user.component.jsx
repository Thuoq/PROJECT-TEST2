import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { signOutStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const { SubMenu } = Menu;
const NavigationUser = ({currentUser,signOutStart,windowHeight,hidden,...props}) =>{ 
 
   
  return(
  <SubMenu icon={<UserOutlined />}  {...props}  title={<span style={{textTransform: 'capitalize'}}>{currentUser.name}</span>}>

    <Menu.Item key="4" icon={<UserOutlined style={{ fontSize: '1.6rem' }} />}>
      <Link to="/user">Your Profile</Link>
    </Menu.Item>
    
    <Menu.Item key="5" icon={<LogoutOutlined style={{ fontSize: '1.6rem' }} />}>
      <Link to="/" onClick = {() => signOutStart()}>Log Out</Link>
    </Menu.Item>
  </SubMenu>
)};

const mapDispatchToProps = dispatch => ({
  signOutStart : () => dispatch(signOutStart())
})
NavigationUser.propTypes = {
  currentUser: PropTypes.shape({
    name : PropTypes.string
  }),
  signOutStart: PropTypes.func,
  hidden: PropTypes.bool

}

export default connect(null,mapDispatchToProps)(NavigationUser) ;
