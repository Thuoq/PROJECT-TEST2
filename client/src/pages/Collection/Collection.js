import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import './Collection.scss';
import { Layout, Row, Col, Pagination } from 'antd';
import { CardItem, SortProduct } from '../../components/index';

const { Content } = Layout;

const CollectionPage = ({
  match,
  collections,
  history,
  location,
  ...props
}) => {
  const parsed = queryString.parse(location.search);

  return (
    <Layout.Content className="shop-container">
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 600,
        }}
      >
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <SortProduct {...props} />
        </div>
        {collections.length ? (
          <Row gutter={[16, 16]}>
            {collections.map((cartItem, idx) => (
              <Col
                key={idx}
                xs={24}
                sm={8}
                md={6}
                lg={3}
                className="gutter-row"
              >
                <CardItem
                  key={idx}
                  cartItem={cartItem}
                  match={match}
                  history={history}
                  {...props}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <h1 style={{ textAlign: 'center' }}>Not Collection for search </h1>
        )}
        <Pagination
          style={{ textAlign: 'center' }}
          current={parseInt(parsed.page)}
          onChange={(page) => {
            parsed.page = page;
            let stringified = queryString.stringify(parsed);
            history.push(`${match.url}?${stringified}`);
          }}
          defaultPageSize={24}
          total={200}
        />
      </Content>
    </Layout.Content>
  );
};

CollectionPage.propTypes = {
  currentPage: PropTypes.number,
  collections: PropTypes.array,
  getCollectionStart: PropTypes.func,
};

export default CollectionPage;
