import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Card } from 'antd';
import { EllipsisOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { addItemToCart } from '../../redux/cart/cart.action';
import './CardItem.scss';
import CardItemContent from './CardContent';

import { Link } from 'react-router-dom';

const { Meta } = Card;

const CardItem = ({ cartItem, addItemToCart, match, history }) => (
  <Card
    className="card-container animate__animated animate__zoomInDown"
    hoverable
    cover={<img alt="example" className="card-image" src={cartItem.photoURL} />}
    actions={[
      <ShoppingCartOutlined onClick={() => addItemToCart(cartItem)} />,
      match.url === '/' ? (
        <Link to={`${match.url}shop/${cartItem._id}`}>Detail</Link>
      ) : (
        <EllipsisOutlined
          onClick={() => {
            history.push(`${match.url}${cartItem._id}`);
          }}
        />
      ),
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

CardItem.propTypes = {
  addItemToCart: PropTypes.func,
  isLoading: PropTypes.bool,
  cartItem: PropTypes.shape({
    nameEN: PropTypes.string,

    photoURL: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

export default connect(null, mapDispatchToProps)(CardItem);
