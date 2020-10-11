import React from 'react';

import { Spinner } from '../../components/index';

const withSpinner = (WrapperComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <Spinner isLoading={isLoading} />
  ) : (
    <WrapperComponent {...otherProps} />
  );

export default withSpinner;
