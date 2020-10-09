import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './NavigationSearch.scss';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Row, Col, Input, Button } from 'antd';
import CartDropdown from '../CardDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectTotalQuantity } from '../../redux/cart/cart.selector';

const NavigationSearch = ({ totalQuantity, history, match }) => {
  const [filedSearch, setFiledSearch] = useState('');
  const handleChange = (e) => {
    setFiledSearch(e.target.value);
  };
  const handleSearch = () => {
    history.push(`${match.url}shop?nameEN=${filedSearch}&page=1`);
  };
  return (
    <div className="container">
      <div className="inner-header">
        <Row>
          <Col span={4}>
            <div className="logo">
              <Link to="/">
                <img src="https://i.postimg.cc/cH8BcTSc/logo.png" alt="LOGO" />
              </Link>
            </div>
          </Col>
          <Col span={14} className="animate__animated animate__zoomInDown">
            <div className="advanced-search">
              {/* SEARCH */}

              <Button type="primary" className="category-btn">
                Search
              </Button>

              <Input.Group className="input-group">
                <Input.Search
                  style={{ height: '100%' }}
                  type="text"
                  defaultValue={filedSearch}
                  onChange={handleChange}
                  placeholder="What do you need ?"
                />
                <Button onClick={handleSearch} type="primary">
                  <SearchOutlined />
                </Button>
              </Input.Group>
            </div>
          </Col>
          <Col span={6}>
            <ul className="nav-right">
              <li className="cart-icon">
                <Link to="/checkout">
                  <ShoppingCartOutlined style={{ fontSize: '2.5rem' }} />
                  <span className="cart-icon--number">{totalQuantity}</span>
                </Link>
                <CartDropdown />
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalQuantity: selectTotalQuantity,
});
NavigationSearch.propTypes = {
  totalQuantity: PropTypes.number,
};

export default withRouter(connect(mapStateToProps)(NavigationSearch));
