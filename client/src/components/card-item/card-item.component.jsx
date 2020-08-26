import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import { MoreOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { addItemToCart } from '../../redux/cart/cart.action';
import './card-item.styles.scss';
import CardItemContent from '../card-item-content/card-item-content.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoading } from '../../redux/shop/shop.selector';

const { Meta } = Card;

const CardItem = ({
  cartItem, addItemToCart , match, history,isLoading
}) => {
  
  return (
    <Card
      className="card-container"
      hoverable
      loading = {isLoading}
      cover={(
        <img
          alt="example"
          className="card-image"
          style={{ width: '100%'}}
          src={cartItem.photoURL}
        />
    )}
      actions={[
        <Button key="submit" type="primary" onClick={() => addItemToCart(cartItem)}>
          Add To Card
          <ShoppingCartOutlined />
        </Button>,
        <Button type="link" onClick ={() => history.push(`${match.url}/${cartItem.idProduct}`)}>

          More Detail
          <MoreOutlined />
        </Button>,
      ]}
    >
      <Meta
        title={<span style={{ fontSize: '1.6rem' }}>{cartItem.nameEN}</span>}
        description={
          <CardItemContent cartItem={cartItem} />
      }
      />
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
});
const mapStateToProps = createStructuredSelector({
  isLoading : selectIsCollectionLoading
})

CardItem.propTypes = {
  addItemToCart: PropTypes.func,
  isLoading: PropTypes.bool,
  cartItem: PropTypes.shape({
    nameEN : PropTypes.string,
    idProduct: PropTypes.number,
    photoURL: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  match: PropTypes.shape({
    url: PropTypes.string
  })
}

export default (connect(mapStateToProps, mapDispatchToProps)(CardItem));
