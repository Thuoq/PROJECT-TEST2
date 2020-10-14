import { Directory } from '../components/index';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionLoading,
  selectCollections,
} from '../redux/shop/shop.selector';
import { getCollectionStart } from '../redux/shop/shop.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading,
  collections: selectCollections,
});
const mapDispatchToProps = (dispatch) => ({
  getCollectionStart: (obj) => dispatch(getCollectionStart(obj)),
});

const DirectoryContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Directory)
);

export default DirectoryContainer;
