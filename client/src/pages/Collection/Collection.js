import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '../../helpers/query';
import './Collection.scss';
import { Layout, Row, Col, Pagination } from 'antd';
import CardItem from '../../components/CardItem/CardItem';
import SortProduct from '../../components/SortProduct/SortProduct';

const { Content } = Layout;

const CollectionPage = ({
  currentPage,
  match,
  collections,
  history,
  getCollectionStart,
  ...props
}) => {
  const query = useQuery();
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
          <Row gutter={[48, 24]}>
            {collections.map((cartItem, idx) => (
              <Col
                key={idx}
                xs={24}
                sm={12}
                md={8}
                lg={6}
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
          current={currentPage}
          onChange={(page, pageSize) => {
            if (!query.get('nameEN')) {
              history.push(`${match.url}?page=${page}`);
            } else {
              history.push(
                `${match.url}?nameEN=${query.get('nameEN')}&&page=${page}`
              );
            }
            getCollectionStart({ page, limit: pageSize });
          }}
          defaultPageSize={12}
          total={100}
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
