import React from 'react';
import { Result, Button } from 'antd';

const Page404 = (props) => {
    //console.log(props)
    //debugger;
    return(
        <Result
            status="404"
            title="404"
            subTitle="Sorry, Page Not Found."
            extra={<Button type="primary">Back Home</Button>}
        />
)}

export default Page404;