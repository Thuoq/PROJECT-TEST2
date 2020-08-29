import {connect} from 'react-redux';


import CollectionPage from './collection-page.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoading, selectCollections, selectCurrentPage } from '../../redux/shop/shop.selector';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { getCollectionStart } from '../../redux/shop/shop.action';



const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionLoading,
    collections: selectCollections,
    currentPage: selectCurrentPage
})


const mapDispatchToProps = dispatch => ({
    getCollectionStart : pageAndLimit => dispatch(getCollectionStart(pageAndLimit))
})

const CollectionPageContainer = connect(mapStateToProps,mapDispatchToProps)(withSpinner(CollectionPage));

export default CollectionPageContainer


