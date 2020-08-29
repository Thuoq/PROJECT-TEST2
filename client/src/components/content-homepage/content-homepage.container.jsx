import {connect} from 'react-redux';

import withSpinner from '../with-spinner/with-spinner.component';
import ContentHomePage from './content-homepage.component';
import { createStructuredSelector } from 'reselect';
import { selectCollections, selectIsCollectionLoading } from '../../redux/shop/shop.selector';


const mapStateToProps = createStructuredSelector({
    collections : selectCollections,
    isLoading : selectIsCollectionLoading
})


const ContentHomePageContainer = connect(mapStateToProps)(withSpinner(ContentHomePage))

export default ContentHomePageContainer;