import { message } from 'antd';

export const messageError = (err) => message.error(err.response.data.message);
