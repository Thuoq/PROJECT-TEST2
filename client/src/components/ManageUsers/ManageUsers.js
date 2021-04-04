import React from 'react';
import { Layout, Input, Table } from 'antd';
import axios from 'axios';
import columns from '../../configs/ManageUsers/ColumnsUsers';
import { getToken } from '../../helpers/auth';
const { Content } = Layout;
class ManageUsers extends React.Component {
  state = {
    userList: [],
    searchUser: '',
  };
  componentDidMount() {
    const token = `Bearer ${getToken()}`;

    axios('http://localhost:2222/api/v1/admin/users', {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      this.setState({
        userList: res.data.users,
      });
    });
  }
  handleOnChange = (e) => {
    const { value } = e.target;
    this.setState({
      searchUser: value,
    });
  };

  render() {
    const { userList, searchUser } = this.state;
    let findUserByName = [];
    if (userList.length) {
      findUserByName = userList.filter((e) =>
        e.name.toLowerCase().includes(searchUser.toLowerCase())
      );
      console.log(findUserByName);
    }
    return (
      <Layout style={{ padding: '0 2.4rem 2.4rem' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 600,
          }}
        >
          <Input
            size="large"
            enterButton
            placeholder="Search Users By Name"
            value={searchUser}
            onChange={this.handleOnChange}
            // onSearch={this.handleSearchWaybill}
            style={{ marginBottom: '2rem' }}
          />
          <Table dataSource={findUserByName} columns={columns} rowKey="_id" />
        </Content>
      </Layout>
    );
  }
}

export default ManageUsers;
