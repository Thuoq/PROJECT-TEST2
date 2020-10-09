const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://myapidomain.com'
    : 'http://localhost:2222/api/v1/booking/stripe-information';

export default PAYMENT_SERVER_URL;
