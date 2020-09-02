import React from 'react';
import { Result, Button } from 'antd';

const Page404 = () => (
    <Result
        status="500"
        title="500"
        subTitle="Sorry, Page Not Found."
        extra={<Button type="primary">Back Home</Button>}
    />
)

export default Page404;