import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Card } from 'antd';
import { EllipsisOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { addItemToCart } from '../../redux/cart/cart.action';
import './CardItem.scss';
import CardItemContent from './CardContent';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoading } from '../../redux/shop/shop.selector';

const { Meta } = Card;

const CardItem = ({ cartItem, addItemToCart, match, history, isLoading }) => (
  <Card
    className="card-container animate__animated animate__zoomInDown"
    hoverable
    loading={isLoading}
    cover={<img alt="example" className="card-image" src={cartItem.photoURL} />}
    actions={[
      <ShoppingCartOutlined onClick={() => addItemToCart(cartItem)} />,
      <EllipsisOutlined
        onClick={() => {
          if (match.url === '/') {
            history.push(`${match.url}shop/${cartItem.idProduct}`);
          } else {
            history.push(`${match.url}/${cartItem.idProduct}`);
          }
        }}
      />,
    ]}
  >
    <Meta
      className="card-meta"
      title={<span>{cartItem.nameEN}</span>}
      description={<CardItemContent cartItem={cartItem} />}
    />
  </Card>
);
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
});
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
});

CardItem.propTypes = {
  addItemToCart: PropTypes.func,
  isLoading: PropTypes.bool,
  cartItem: PropTypes.shape({
    nameEN: PropTypes.string,
    idProduct: PropTypes.number,
    photoURL: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
