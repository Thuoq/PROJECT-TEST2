import React  , {useState } from 'react';
import PropTypes from 'prop-types';

import './collection-page.styles.scss';
import {
  Layout, Input, Row, Col,Pagination
} from 'antd';
import CardItem from '../../components/card-item/card-item.component';
const { Content } = Layout;

const CollectionPage = ({currentPage,match,collections,history,getCollectionStart,...props}) => {
  const [filedSearch , setFieldSearch] = useState("");
  const filterSearch = collections.filter(el => el.nameEN.toLowerCase().includes(filedSearch.toLowerCase()));  
  return( 
  <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
        <Input.Search
          placeholder="Search By Category ... "
          onSearch = {(value) => {
            getCollectionStart({nameEN: value})
          }}
          enterButton="Search"
          onChange= {(e) => setFieldSearch(e.target.value) }
          size="large"
          style={{ marginBottom: '2rem' }}
        />
        <h2>Product  Pages</h2>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 600,
          }}
        >
          <Row gutter={[48, 24]}>
            {
              filterSearch.map((cartItem, idx) => (
                <Col key={idx} xs={24} sm={12} md={8} lg={6} className="gutter-row">
                  <CardItem key={idx} cartItem={cartItem} match= {match} history={history} {...props} />
                </Col>
              ))
            }
          </Row>
          <Pagination style={{textAlign:'center'}} current={currentPage}  onChange ={(page,pageSize) => {
          
            getCollectionStart({page, limit : pageSize})
            
          }}defaultPageSize={12} total={100} />
        </Content>
    </Layout>
)}


CollectionPage.propTypes = {
  currentPage: PropTypes.number,
  collections: PropTypes.array,
  getCollectionStart: PropTypes.func
}


export default (CollectionPage);
