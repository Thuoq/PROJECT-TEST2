import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import {
  ProfileOutlined,
  AccountBookOutlined,
  UploadOutlined,
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
        <Link to="/user/booking"> Booking</Link>
      </Menu.Item>
      {currentUser.role.includes('admin') ? (
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/user/upload"> Upload Booking</Link>
        </Menu.Item>
      ) : null}
    </Menu>
  </Sider>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SideBarUser);
