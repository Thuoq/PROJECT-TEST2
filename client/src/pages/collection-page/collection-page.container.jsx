import {connect} from 'react-redux';


import CollectionPage from './collection-page.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoading } from '../../redux/shop/shop.selector';
import withSpinner from '../../components/with-spinner/with-spinner.component';



const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionLoading
})

const CollectionPageContainer = connect(mapStateToProps)(withSpinner(CollectionPage));

export default CollectionPageContainer


