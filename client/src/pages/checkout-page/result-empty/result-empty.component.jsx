import React from 'react';
import { withRouter } from 'react-router-dom';
import { Result, Button } from 'antd';
import './result-empty.styles.scss'

const ResultEmpty = ({ history }) => (
  <Result
    className="result-empty"
    status="404"
    title="Your cart Empty"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={() => history.push('/')}>Go Shopping NOW</Button>}
  />
);
export default withRouter(ResultEmpty);
