import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import withSpinner from '../hocs/WithSpinner/WithSpinner';
import { ContentHomePage } from '../components/index';
import {
  selectCollections,
  selectIsCollectionLoading,
} from '../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  isLoading: selectIsCollectionLoading,
});

const ContentHomePageContainer = withRouter(
  connect(mapStateToProps)(withSpinner(ContentHomePage))
);

export default ContentHomePageContainer;
