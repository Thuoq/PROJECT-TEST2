import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './ProductDetail.scss';
import { Button, Layout, Tabs } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Page404 from '../404/404';
import { DescriptionTableCard } from '../../components/index';
import { selectProductDetail } from '../../redux/shop/shop.selector';

const { TabPane } = Tabs;
const { Content } = Layout;

const ProductDetailPage = ({ productDetail, addItemToCart }) =>
  productDetail ? (
    <Content
      style={{
        padding: '2.4rem 2.4rem 0 2.2rem',
        margin: 0,
        minHeight: 600,
        backgroundColor: 'white',
      }}
    >
      <div className="product-detail-container">
        <div className="product-image">
          <img width="100%" src={productDetail.photoURL} alt="PRODUCT_DETAIL" />
        </div>
        <div className="product-detail">
          <div className="item-detail">
            <h3
              style={{
                color: '#222',
                marginBottom: '1rem',
                fontWeight: 400,
                fontSize: '2.4rem',
              }}
            >
              {productDetail.nameEN}
            </h3>
            <div className="item-price">
              <i className="fa fa-tags" /> &nbsp;
              <span>${productDetail.priceUSD}</span>
            </div>

            <p
              style={{
                fontSize: '1.4rem',
                fontWeight: 300,
                color: '#777',
              }}
            >
              {productDetail.nameVN}
            </p>
            <div
              style={{
                fontSize: '1.4rem',
                fontWeight: 300,
                color: '#777',
              }}
            >
              Origin:
              <span
                style={{
                  fontWeight: 700,
                  color: '#777',
                }}
              >
                {productDetail.origin}
              </span>
            </div>

            <br />
            <br />
            <br />
          </div>
          <div>
            <Button type="primary" onClick={() => addItemToCart(productDetail)}>
              <ShoppingCartOutlined />
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        centered
        style={{
          padding: '0 20% 5%',
          color: '#777777',
        }}
        tabBarStyle={{
          border: '1px solid #ccc',
          backgroundColor: '#f9fafc',
        }}
      >
        <TabPane
          tab={<div className="tabPaneHeading">Specification</div>}
          key="2"
        >
          <DescriptionTableCard productDetail={productDetail} />
        </TabPane>
      </Tabs>
    </Content>
  ) : (
    <Page404 />
  );

const mapStateToProps = (state, ownProps) => ({
  productDetail: selectProductDetail(ownProps.match.params.id)(state),
});

ProductDetailPage.propTypes = {
  productDetail: PropTypes.shape({
    photoURL: PropTypes.string,
    nameEN: PropTypes.string,
    nameVN: PropTypes.string,
    weight: PropTypes.number,
    totalWeight: PropTypes.number,
    origin: PropTypes.string,
    priceUSD: PropTypes.number,
  }),
  addItemToCart: PropTypes.func,
};

export default connect(mapStateToProps)(ProductDetailPage);
