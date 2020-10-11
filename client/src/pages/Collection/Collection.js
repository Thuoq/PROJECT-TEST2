import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import './Collection.scss';
import { Layout, Row, Col, Pagination, Spin } from 'antd';
import { CardItem, SortProduct } from '../../components/index';

const { Content } = Layout;

const CollectionPage = ({
  collections,
  location,
  getCollectionStart,
  history,
  match,
  isLoading,
  ...props
}) => {
  const parsed = queryString.parse(location.search);
  const nameEN = parsed.nameEN;
  const sort = parsed.sort;
  const page = parsed.page;
  useEffect(() => {
    getCollectionStart({ nameEN, sort, page });
  }, [nameEN, sort, page, getCollectionStart]);
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
        <Spin spinning={isLoading}>
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
        </Spin>
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
