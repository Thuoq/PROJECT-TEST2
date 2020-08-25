import React from 'react';
import {Link} from 'react-router-dom';
import {  Menu, Layout } from "antd";
import {
    ProfileOutlined,
    AccountBookOutlined,
  } from "@ant-design/icons";
const { Sider } = Layout
class SideBarUser extends React.Component {
    state = {
        collapsed: false
      };
    
    onCollapse = (collapsed) => {
        
        this.setState({ collapsed });
    };
    render() {
     
        return (
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
          <Menu theme="light"  mode="inline">
            <Menu.Item key="1" icon={<ProfileOutlined />}>
              <Link to ="/user">Your Information</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<AccountBookOutlined />}>
             <Link to ="/user/booking"> Booking</Link>
            </Menu.Item>
            
          </Menu>
        </Sider>
        )
    }
}


export default SideBarUser;