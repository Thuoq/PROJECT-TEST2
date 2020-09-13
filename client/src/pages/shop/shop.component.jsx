import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import CollectionPageContainer from '../../containers/collection-page.container';
import { getCollectionStart } from '../../redux/shop/shop.action';
import ProductDetailPageContainer from '../../containers/product-detail.container';
import { useQuery } from '../../helpers/query';

const ShopPage = ({ match, getCollectionStart }) => {
  const query = useQuery();
  const nameEN = query.get('nameEN');
  useEffect(() => {
    getCollectionStart({ nameEN });
  }, [nameEN, getCollectionStart]);
  return (
    <Layout style={{ marginTop: '-3.6rem' }}>
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={CollectionPageContainer}
        />
        <Route
          path={`${match.url}/:id`}
          component={ProductDetailPageContainer}
        />
      </Switch>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCollectionStart: (query) => dispatch(getCollectionStart(query)),
});
ShopPage.propTypes = {
  getCollectionStart: PropTypes.func,
};

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
