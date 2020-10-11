import React from 'react';
import { Layout, Table, Spin } from 'antd';
import COLUMNS from '../../configs/Directory/Directory';
const { Content } = Layout;

const Directory = () => {
  return (
    <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 600,
        }}
      >
        <Table
          rowClassName={(record) =>
            record.receivedProduct ? 'background-silver' : null
          }
          bordered
          tableLayout="fixed"
          rowSelection={{
            getCheckboxProps: (record) => ({
              disabled: record.receivedProduct === true,
              // Column configuration not to be checked
              name: record.name,
            }),
            onChange: (selectedRowKeys, selectedRows) => {
              this.setState({ bookingsChoose: selectedRows });
            },
          }}
          scroll={{ x: 2000 }}
          // dataSource={dataFilterStatus}
          columns={COLUMNS}
          rowKey="key"
        />
      </Content>
    </Layout>
  );
};

export default Directory;
