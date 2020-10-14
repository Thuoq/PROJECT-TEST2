import { message } from 'antd';

export const messageError = (err) =>
  err.response
    ? message.error(err.response.data.message)
    : message.error('Error Network');
export const messageSuccess = () => message.success('Update Successfully ');
