import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, withRouter } from 'react-router-dom';
import CollectionPageContainer from '../../containers/collection-page.container';
import SideBarHome from '../../components/sidebar-home/sidebar-home.component';
import { connect } from 'react-redux';
import {getCollectionStart} from '../../redux/shop/shop.action';
import ProductDetailPageContainer from '../../containers/product-detail.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const {getCollectionStart} = this.props;
    getCollectionStart();
  }

  render() {
    const {match} = this.props;
    return(
      <>
      <SideBarHome />
      <Switch>
        <Route exact path={`${match.url}`} component={CollectionPageContainer} />
        <Route  path={`${match.url}/:id`} component={ProductDetailPageContainer} />
      </Switch>
    </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCollectionStart : () => dispatch(getCollectionStart())
})
ShopPage.propTypes = {
  getCollectionStart: PropTypes.func
} 

export default withRouter(connect(null,mapDispatchToProps)(ShopPage)) ;
