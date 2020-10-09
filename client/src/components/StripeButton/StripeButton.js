// import React from 'react';
// //import moment from 'moment';
// import { message, Button } from 'antd';
// import AxiosInstance from '../../helpers/interceptor';
// import StripeCheckout from 'react-stripe-checkout';
// import STRIPE_PUBLISHABLE from '../../constants/stripe';
// import PAYMENT_SERVER_URL from '../../constants/server';
// import './StripeButton.scss';
// import { getToken } from '../../helpers/auth';
// import { createStructuredSelector } from 'reselect';
// import {
//   selectCartItem,
//   selectTotalPrice,
// } from '../../redux/cart/cart.selector';
// import { connect } from 'react-redux';
// import { selectCurrentUser } from '../../redux/user/user.selector';

// class StripeButton extends React.Component {
//   onToken = (amount) => (token) => {
//     const tokenAuth = `Bearer ${getToken()}`;
//     //  const { currentUser, totalMoney, cartItems } = this.props;
//     const CURRENCY = 'USD';
//     return AxiosInstance(`${PAYMENT_SERVER_URL}`, {
//       method: 'post',
//       headers: {
//         Authorization: tokenAuth,
//       },
//       data: {
//         // token,
//         source: token.id,
//         currency: CURRENCY,
//         amount: this.fromDollarToCent(amount),
//         // cart: cartItems,
//         // email: currentUser.email,
//         // totalMoney,
//         // createAt: `${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}`,
//       },
//     })
//       .then((res) => {
//         message.success('Payment Successful');
//       })
//       .catch((err) => {
//         message.error('ERROR DATA');
//       });
//   };
//   fromDollarToCent = (amount) => parseInt(amount * 100);
//   render() {
//     const { currentUser, totalMoney } = this.props;

//     const CURRENCY = 'USD';

//     return (
//       <StripeCheckout
//         name={'Your Company Name'}
//         amount={this.fromDollarToCent(totalMoney)}
//         token={this.onToken(totalMoney)}
//         currency={CURRENCY}
//         stripeKey={STRIPE_PUBLISHABLE}
//         shippingAddress
//         billingAddress={true}
//         zipCode={true}
//         email={currentUser.email}
//         allowRememberMe={false}
//       >
//         <Button
//           type="primary"
//           style={{
//             width: '100%',
//             marginTop: '2rem',
//             fontSize: '1.4rem',
//             backgroundColor: '#e7ab3c',
//             border: 'none',
//           }}
//         >
//           <i className="fa fa-credit-card"></i>
//           &nbsp; Check Out By Credit Card
//         </Button>
//       </StripeCheckout>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItem,
//   currentUser: selectCurrentUser,
//   totalMoney: selectTotalPrice,
// });

// export default connect(mapStateToProps)(StripeButton);
