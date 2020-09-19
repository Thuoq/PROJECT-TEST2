import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import {
  ProfileOutlined,
  AccountBookOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SideBarUser = () => (
  <Sider>
    <Menu theme="light" mode="inline">
      <Menu.Item key="1" icon={<ProfileOutlined />}>
        <Link to="/user">Your Information</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<AccountBookOutlined />}>
        <Link to="/user/booking"> Booking</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<ShoppingOutlined />}>
        <Link to="/user/purchase"> Purchase Menu </Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default SideBarUser;
