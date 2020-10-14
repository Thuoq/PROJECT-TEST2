import React, { useEffect } from 'react';
import queryString from 'query-string';
import { Layout, Table, Input } from 'antd';
import COLUMNS from '../../configs/Directory/Directory';
const { Content } = Layout;

const Directory = ({
  getCollectionStart,
  isLoading,
  collections,
  location,
  history,
  match,
}) => {
  const parsed = queryString.parse(location.search);
  const nameEN = parsed.nameEN;
  const limit = parsed.limit;

  //window
  useEffect(() => {
    getCollectionStart({ nameEN, limit });
  }, [nameEN, limit, getCollectionStart]);
  const handleSearchProduct = (values) => {
    history.push(`${match.url}?nameEN=${values}&limit=1000`);
  };
  return (
    <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 600,
        }}
      >
        <Input.Search
          size="large"
          enterButton
          placeholder="Search Booking By Name EN Or Name VN"
          onSearch={handleSearchProduct}
          style={{ marginBottom: '2rem' }}
        />
        <Table
          bordered
          tableLayout="fixed"
          rowSelection={
            {
              // getCheckboxProps: (record) => ({
              //   disabled: record.receivedProduct === true,
              //   // Column configuration not to be checked
              //   name: record.name,
              // }),
              // onChange: (selectedRowKeys, selectedRows) => {
              //   this.setState({ bookingsChoose: selectedRows });
              // },
            }
          }
          loading={isLoading}
          scroll={{ x: 2000 }}
          dataSource={collections}
          columns={COLUMNS}
          rowKey="_id"
        />
      </Content>
    </Layout>
  );
};

export default Directory;
