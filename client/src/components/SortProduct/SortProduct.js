import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import { UpOutlined, DownOutlined } from '@ant-design/icons';
import './SortProduct.scss';
import { Radio } from 'antd';

const SortProduct = ({ history, match, location }) => {
  const parsed = queryString.parse(location.search);

  const onChange = (e) => {
    parsed.sort = e.target.value;
    let stringified = queryString.stringify(parsed);
    history.push(`${match.url}?${stringified}`);
  };
  return (
    <div className="sort-container animate__slow animate__animated animate__fadeInUp">
      <Radio.Group
        defaultValue={parsed.sort}
        className="sort-group"
        onChange={onChange}
        size="large"
        style={{ width: '100%' }}
      >
        <Radio value="priceUSD">
          Price Increase <UpOutlined />
        </Radio>
        <Radio value="-priceUSD">
          Price Decrease <DownOutlined />
        </Radio>
      </Radio.Group>
    </div>
  );
};
SortProduct.propType = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    url: PropTypes.func,
  }),
};

export default withRouter(SortProduct);
