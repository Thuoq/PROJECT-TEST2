import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CollectionPageContainer from '../collection-page/collection-page.container';
import SideBarHome from '../../components/sidebar-home/sidebar-home.component';
import { connect } from 'react-redux';
import {getCollectionStart} from '../../redux/shop/shop.action';
import ProductDetailPageContainer from '../product-detail-page/product-detail-page.container';

class CollectionOverView extends React.Component {
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
        <Route exact path={`${match.url}/:id`} component={ProductDetailPageContainer} />
      </Switch>
    </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getCollectionStart : () => dispatch(getCollectionStart())
})


export default withRouter(connect(null,mapDispatchToProps)(CollectionOverView)) ;
