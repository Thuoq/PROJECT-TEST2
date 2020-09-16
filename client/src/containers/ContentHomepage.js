import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import withSpinner from '../hocs/with-spinner/with-spinner.component';
import ContentHomePage from '../components/ContentHomepage/ContentHomepage';
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
