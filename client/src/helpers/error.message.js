import {message} from 'antd';

export const messageError = (err) => {
    return message.error(err.response.data.message)

}