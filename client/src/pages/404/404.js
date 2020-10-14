import React from 'react';
import { Result, Button } from 'antd';

const Page404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, Page Not Found."
    extra={
      <Button
        type="link"
        href="/"
        style={{ backgroundColor: '#d4b106', borderColor: '#d4b106' }}
      >
        Back Home
      </Button>
    }
  />
);

export default Page404;
