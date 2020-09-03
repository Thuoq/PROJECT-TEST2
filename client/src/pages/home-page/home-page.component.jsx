import React from 'react';
import ContentHomePageContainer from '../../containers/content-homepage.container';
import { getBestSaleStart } from '../../redux/shop/shop.action';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  componentDidMount() {
    const {getBestSaleStart} = this.props;
    getBestSaleStart()
  }
  render() {
    return(
        <ContentHomePageContainer/> 
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getBestSaleStart : () => dispatch(getBestSaleStart()) 
})
export default connect(null,mapDispatchToProps)(HomePage);
