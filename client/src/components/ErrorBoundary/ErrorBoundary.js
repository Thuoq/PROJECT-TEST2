import React from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    console.log(error);
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={<Link to="/shop">Back Home</Link>}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
