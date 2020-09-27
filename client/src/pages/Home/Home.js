import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { ContentHomePageContainer } from '../../containers/index';
import { getBestSaleStart } from '../../redux/shop/shop.action';

class HomePage extends React.Component {
  componentDidMount() {
    const { getBestSaleStart } = this.props;
    getBestSaleStart();
  }

  render() {
    return (
      <Layout>
        <ContentHomePageContainer />
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getBestSaleStart: () => dispatch(getBestSaleStart()),
});
export default connect(null, mapDispatchToProps)(HomePage);
