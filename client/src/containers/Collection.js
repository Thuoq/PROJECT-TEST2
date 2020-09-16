import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from '../pages/Collection/Collection';

import {
  selectIsCollectionLoading,
  selectCollections,
  selectCurrentPage,
} from '../redux/shop/shop.selector';
import withSpinner from '../hocs/with-spinner/with-spinner.component';
import { getCollectionStart } from '../redux/shop/shop.action';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
  collections: selectCollections,
  currentPage: selectCurrentPage,
});

const mapDispatchToProps = (dispatch) => ({
  getCollectionStart: (pageAndLimit) =>
    dispatch(getCollectionStart(pageAndLimit)),
});

const CollectionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withSpinner(CollectionPage));

export default CollectionPageContainer;
