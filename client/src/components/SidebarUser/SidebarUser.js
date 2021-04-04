import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import {
  ProfileOutlined,
  AccountBookOutlined,
  UploadOutlined,
  ShopOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

const { Sider } = Layout;

const SideBarUser = ({ currentUser }) => (
  <Sider>
    <Menu theme="light" mode="inline">
      <Menu.Item key="1" icon={<ProfileOutlined />}>
        <Link to="/user">Your Information</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<AccountBookOutlined />}>
        <Link to="/user/booking"> Booking </Link>
      </Menu.Item>
      {currentUser.role.includes('admin') ? (
        <Menu>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/user/upload"> Upload Booking</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ShopOutlined />}>
            <Link to="/user/shop?limit=100"> Manage Shop</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<AccountBookOutlined />}>
            <Link to="/user/booking-import"> Booking Import</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UsergroupDeleteOutlined />}>
            <Link to="/user/manage-user">Manage Users</Link>
          </Menu.Item>
        </Menu>
      ) : null}
    </Menu>
  </Sider>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SideBarUser);
