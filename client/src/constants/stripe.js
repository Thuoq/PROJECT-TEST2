const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_f2ERaBXFhdE4ytogeGSzKMDk00DJAzb1f4';

export default STRIPE_PUBLISHABLE;
