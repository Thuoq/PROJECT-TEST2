import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
//import windowSize from 'react-window-size';
import dataSideBar from './sidebar-home-data';
import { ReactComponent as Shirt } from '../../assets/002-shirt.svg';

import './SidebarHome.scss';
import { getCollectionStart } from '../../redux/shop/shop.action';

const { SubMenu } = Menu;
const { Sider } = Layout;
class SideBarHome extends React.Component {
  render() {
    const { getCollectionStart } = this.props;

    return (
      <Sider className="site-layout-background">
        <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
          <SubMenu
            key="sub3"
            icon={<Shirt className="icon-sidebar-home" />}
            title={<span className="title-category">Clothes</span>}
          >
            {dataSideBar.map((el, idx) => (
              <Menu.Item key={idx}>
                <Link
                  to={{
                    pathname: '/shop',
                    search: `?nameEN=${el}&&page=1`,
                  }}
                  onClick={() => getCollectionStart({ nameEN: el })}
                >
                  {el}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCollectionStart: (inforQuery) => dispatch(getCollectionStart(inforQuery)),
});

SideBarHome.propTypes = {
  getCollectionStart: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(SideBarHome);
