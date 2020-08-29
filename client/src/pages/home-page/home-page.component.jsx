import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ContentHomePageContainer from '../../components/content-homepage/content-homepage.container';
import CollectionOverView from '../collection-overview-page/collection-overview-page.component';
import { getBestSaleStart } from '../../redux/shop/shop.action';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  componentDidMount() {
    const {getBestSaleStart} = this.props;
    getBestSaleStart()
  }
  render() {
    return(
      <Layout>
        <Switch>
          <Route exact path="/" component={ContentHomePageContainer} />
          <Route path="/productQuery" component={CollectionOverView} />
        </Switch>
      </Layout>
    )
  }
}



const mapDispatchToProps = dispatch => ({
  getBestSaleStart : () => dispatch(getBestSaleStart()) 
})
export default connect(null,mapDispatchToProps)(HomePage);
