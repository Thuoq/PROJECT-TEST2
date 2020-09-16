import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

import { Link } from './node_modules/react-router-dom';
import { Menu } from './node_modules/antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from './node_modules/react-redux';
import { signOutStart } from '../../redux/user/user.action';

const { SubMenu } = Menu;
const NavigationUser = ({ currentUser, signOutStart, hidden, ...props }) => (
  <SubMenu
    icon={<UserOutlined />}
    {...props}
    title={
      <span style={{ textTransform: 'capitalize' }}>{currentUser.name}</span>
    }
  >
    <Menu.Item key="4" icon={<UserOutlined style={{ fontSize: '1.6rem' }} />}>
      <Link to="/user">Your Profile</Link>
    </Menu.Item>

    <Menu.Item key="5" icon={<LogoutOutlined style={{ fontSize: '1.6rem' }} />}>
      <Link to="/" onClick={() => signOutStart()}>
        Log Out
      </Link>
    </Menu.Item>
  </SubMenu>
);

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
NavigationUser.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  signOutStart: PropTypes.func,
  hidden: PropTypes.bool,
};

export default connect(null, mapDispatchToProps)(NavigationUser);
