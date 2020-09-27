import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import {
  CollectionPageContainer,
  ProductDetailPageContainer,
} from '../../containers/index';
import { getCollectionStart } from '../../redux/shop/shop.action';

const ShopPage = ({ match, location, getCollectionStart }) => {
  const parsed = queryString.parse(location.search);
  const nameEN = parsed.nameEN;
  const sort = parsed.sort;
  const page = parsed.page;
  useEffect(() => {
    getCollectionStart({ nameEN, sort, page });
  }, [nameEN, sort, page, getCollectionStart]);
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
