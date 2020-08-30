import {connect} from 'react-redux';

import ProductDetailPage from './product-detail-page.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import { addItemToCart } from '../../redux/cart/cart.action';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)
})

const mapDispatchToProps = dispatch => ({
    addItemToCart : cartItem => dispatch(addItemToCart(cartItem))
})

const ProductDetailPageContainer = connect(mapStateToProps,mapDispatchToProps)(withSpinner(ProductDetailPage))
export default ProductDetailPageContainer;