import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {
  Layout, Button, Drawer,
} from 'antd';

import RightNavigation from './right-navigation.component';
import CartDropDown from '../card-dropdown/card-dropdown.component';
import './navigation.styles.scss';
import { createStructuredSelector } from 'reselect';


const { Header } = Layout;
class Navigation extends React.Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    const {hidden} = this.props;
    return(
      <Header className="menuBar" style={{ marginBottom: '2rem' }}>
        <div className="logo">
          <a href="/">LOGO</a>
        </div>
        <div className="menuCon">
          <div className="rightMenu">
            <RightNavigation />
            {
              hidden ? <CartDropDown/> : null
            }
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <RightNavigation />
          </Drawer>
        </div>

      </Header>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  hidden : selectCartHidden
})

Navigation.propTypes = {
  hidden: PropTypes.bool,
  
}

export default connect(mapStateToProps)(Navigation);
