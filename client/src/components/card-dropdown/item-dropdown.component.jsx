import React from 'react';
import { connect } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteItemToCart } from '../../redux/cart/cart.action';
import './item-dropdown.styles.scss';

const ItemDropdown = ({ cartItem, deleteItemToCart }) => (
  <tr>
    <td className="si-pic">
      <img width={100} height={100} src={cartItem.photoURL} alt="" />
    </td>
    <td className="si-text">
      <div className="product-selected">
        <p>
          ${cartItem.priceUSD} x{cartItem.quantity}
        </p>
        <h6>{cartItem.nameEN}</h6>
      </div>
    </td>
    <td className="si-close">
      <DeleteOutlined
        onClick={() => deleteItemToCart(cartItem)}
        className="ti-close"
      />
    </td>
  </tr>
);

const mapDispatchToProps = (dispatch) => ({
  deleteItemToCart: (cartItem) => dispatch(deleteItemToCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(ItemDropdown);
