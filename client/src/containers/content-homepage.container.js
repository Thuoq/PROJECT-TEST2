import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import withSpinner from '../components/with-spinner/with-spinner.component';
import ContentHomePage from '../components/content-homepage/content-homepage.component';
import { createStructuredSelector } from 'reselect';
import { selectCollections, selectIsCollectionLoading } from '../redux/shop/shop.selector';


const mapStateToProps = createStructuredSelector({
    collections : selectCollections,
    isLoading : selectIsCollectionLoading
})


const ContentHomePageContainer = withRouter(connect(mapStateToProps)(withSpinner(ContentHomePage)))

export default ContentHomePageContainer;