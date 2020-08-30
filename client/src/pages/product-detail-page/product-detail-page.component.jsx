import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import './product-detail-page.styles.scss';
import { Button, Layout } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { selectProductDetail } from '../../redux/shop/shop.selector';

const { Content } = Layout;

const ProductDetailPage = ({ productDetail, addItemToCart }) => {
  return(

  <Content style={{
    padding: 24,
    margin: 0,
    minHeight: 600,
  }}
  >
    <h1>Product Detail Pages</h1>
    <div className="product-detail-container">
      <div className="product-image">
        <img width="100%" src={productDetail.photoURL} alt="PRODUCT_DETAIL" />
      </div>
      <div className="product-detail">
        <h2>Description Product : </h2>
        <div className="item-detail">
          <h3>
            Category :
            {' '}
            {productDetail.nameEN}
          </h3>
          <h3>Item Description :</h3>
          <p>
            {productDetail.nameVN}
          </p>
          <h3>Order Net Weight: </h3>
          <span>
            {productDetail.weight}
            {' '}
            KG
            {' '}
          </span>
          <h3>Order Gross Weight: </h3>
          <span>
            {productDetail.totalWeight}
            {' '}
            KG
          </span>
          <h3>Origin : </h3>
          <span>{productDetail.origin}</span>
          <h3>Item Factory Country:</h3>
          <span>CN</span>
          <br />
          <br />
          <br />
        </div>
        <div>
          <Button type="primary" onClick={() => addItemToCart(productDetail)} >
            <ShoppingCartOutlined />
            {' '}
            Buy Now
            {' '}
            {productDetail.priceUSD}
            $
          </Button>

        </div>
      </div>
    </div>
  </Content>
)};

const mapStateToProps = (state, ownProps) => ({
  productDetail: selectProductDetail(ownProps.match.params.id)(state),
});

ProductDetailPage.propTypes = {
  productDetail: PropTypes.shape({
    photoURL: PropTypes.string,
    nameEN: PropTypes.string,
    nameVN: PropTypes.string,
    weight: PropTypes.string,
    totalWeight: PropTypes.string,
    origin: PropTypes.string,
    priceUSD: PropTypes.string
  }),
  addItemToCart: PropTypes.func
}

export default connect(mapStateToProps)(ProductDetailPage);
