import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import {
  CollectionPageContainer,
  ProductDetailPageContainer,
} from '../../containers/index';

const ShopPage = ({ match }) => (
  <Layout style={{ marginTop: '-3.6rem' }}>
    <Switch>
      <Route exact path={`${match.url}`} component={CollectionPageContainer} />
      <Route path={`${match.url}/:id`} component={ProductDetailPageContainer} />
    </Switch>
  </Layout>
);

ShopPage.propTypes = {
  getCollectionStart: PropTypes.func,
};

export default ShopPage;
