import {message} from 'antd';

export const messageError = (err) => message(err.response.data.message)