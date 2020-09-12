import React from 'react';
import {connect} from 'react-redux';
import './card-dropdown.styles.scss';

import {Button} from 'antd';

import ItemDropdown from './item-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItem, selectTotalPrice } from '../../redux/cart/cart.selector';
const CartDropdown = ({totalPrice,cartItems}) => {
    return(
        <div className="cart-hover" >
            {
                !cartItems.length ?
                <h1>Empty Cart</h1> :(
                <>
                    <div className="select-items" >
                        <table>
                            <tbody>
                                {
                                    cartItems.map((cartItem,idx) => <ItemDropdown key={idx} cartItem ={cartItem}/>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                    <div className="select-total">
                        <span>total:</span>
                            <h5>$ {totalPrice}</h5>
                    </div>
                    <div className="select-button">
                        <Button 
                            href="/checkout"
                            type="link" 
                            style={{
                                height: '6.5rem'
                            }}
                            className="view-card"> 
                                GO TO CHECK OUT  
                        </Button>
                    </div>
                </>
                )
            }
        </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItem,
    totalPrice : selectTotalPrice,

})

export default connect(mapStateToProps)(CartDropdown);