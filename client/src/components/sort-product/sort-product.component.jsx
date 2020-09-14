import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '../../helpers/query';
// import {connect} from 'react-redux'
// import {getCollectionStart}from '../../redux/shop/shop.action'
import { UpOutlined } from '@ant-design/icons';
import './sort-product.styles.scss';
import { Checkbox, Button } from 'antd';

//onClick ={() => getCollectionStart({sort : sort.join(',')})}

const SortProduct = ({ history, match, location }) => {
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

// const mapDispatchToProps = dispatch => ({
//   getCollectionStart : queryString => dispatch(getCollectionStart(queryString))
// })

export default withRouter(SortProduct);
