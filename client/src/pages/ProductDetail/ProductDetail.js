import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './ProductDetail.scss';
import { Button, Layout, Tabs } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Page404 from '../404/404';

import { selectProductDetail } from '../../redux/shop/shop.selector';

const { TabPane } = Tabs;
const { Content } = Layout;

const ProductDetailPage = ({ productDetail, addItemToCart, ...props }) =>
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
          tab={<div className="tabPaneHeading">Description</div>}
          key="1"
        >
          <div className="description">
            <p>
              Beryl Cook is one of Britain’s most talented and amusing artists
              .Beryl’s pictures feature women of all shapes and sizes enjoying
              themselves .Born between the two world wars, Beryl Cook eventually
              left Kendrick School in Reading at the age of 15, where she went
              to secretarial school and then into an insurance office. After
              moving to London and then Hampton, she eventually married her next
              door neighbour from Reading, John Cook. He was an officer in the
              Merchant Navy and after he left the sea in 1956, they bought a pub
              for a year before John took a job in Southern Rhodesia with a
              motor company. Beryl bought their young son a box of watercolours,
              and when showing him how to use it, she decided that she herself
              quite enjoyed painting. John subsequently bought her a child’s
              painting set for her birthday and it was with this that she
              produced her first significant work, a half-length portrait of a
              dark-skinned lady with a vacant expression and large drooping
              breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
              still hangs in their house today
            </p>
            <p>
              It is often frustrating to attempt to plan meals that are designed
              for one. Despite this fact, we are seeing more and more recipe
              books and Internet websites that are dedicated to the act of
              cooking for one. Divorce and the death of spouses or grown
              children leaving for college are all reasons that someone
              accustomed to cooking for more than one would suddenly need to
              learn how to adjust all the cooking practices utilized before into
              a streamlined plan of cooking that is more efficient for one
              person creating less waste. The mission
            </p>
          </div>
        </TabPane>
        <TabPane
          tab={<div className="tabPaneHeading">Specification</div>}
          key="2"
        >
          <div className="specification-table">
            <div className="single-row">
              <span>Name</span>
              <span>{productDetail.nameEN}</span>
            </div>
            <div className="single-row">
              <span>Price VND</span>
              <span>{productDetail.priceVN}</span>
            </div>
            <div className="single-row">
              <span>Price USD</span>
              <span>{productDetail.priceUSD}</span>
            </div>
            <div className="single-row">
              <span>Amount</span>
              <span>
                {productDetail.amount}
                mm
              </span>
            </div>
            <div className="single-row">
              <span>Weight</span>
              <span>{productDetail.weight} KG</span>
            </div>
            <div className="single-row">
              <span>Order Net Weight</span>
              <span>{productDetail.weight} KG</span>
            </div>
            <div className="single-row">
              <span>Order Gross Weight</span>
              <span>{productDetail.totalWeight}</span>
            </div>
            <div className="single-row">
              <span>Origin</span>
              <span>{productDetail.origin}</span>
            </div>
            <div className="single-row">
              <span>Item Factory Country:</span>
              <span>CN</span>
            </div>
          </div>
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
