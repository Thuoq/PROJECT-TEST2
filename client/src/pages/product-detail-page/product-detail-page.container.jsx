import {connect} from 'react-redux';

import ProductDetailPage from './product-detail-page.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)
})

const ProductDetailPageContainer = connect(mapStateToProps)(withSpinner(ProductDetailPage))
export default ProductDetailPageContainer;