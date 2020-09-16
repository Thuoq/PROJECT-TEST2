import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { useQuery } from '../../helpers/query';

import { UpOutlined } from '@ant-design/icons';
import './SortProduct.scss';
import { Checkbox, Button } from 'antd';

const SortProduct = ({ history, match }) => {
  const query = useQuery();

  const [sort, setSort] = useState([]);
  const onChange = (checkedValues) => {
    setSort(checkedValues);
  };
  return (
    <div className="sort-container animate__slow animate__animated animate__fadeInUp">
      <Checkbox.Group
        defaultValue={query.get('sort')}
        className="sort-group"
        onChange={onChange}
        style={{ width: '100%' }}
      >
        <Button
          onClick={() =>
            history.push(
              `${match.url}?${
                query.get('nameEN') ? `nameEN=${query.get('nameEN')}` : ''
              }&sort=${sort.join(',')}`
            )
          }
          className="sort-heading"
        >
          Sort Now :{' '}
        </Button>
        <Checkbox value="price">
          Price <UpOutlined />
        </Checkbox>
        <Checkbox value="weight">
          Weight <UpOutlined />
        </Checkbox>
      </Checkbox.Group>
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
