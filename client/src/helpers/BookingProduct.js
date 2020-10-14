import { getToken } from './auth';
import AxiosInstance from './interceptor';
import { URL, ADMIN_API } from '../constants/api';
export default function patchBookingContentOrProductContent(data) {
  const token = `Bearer ${getToken()}`;
  let endPoint;
  if ('nameEN' in data) {
    endPoint = 'product';
  } else {
    endPoint = 'booking';
  }

  return AxiosInstance(`${URL}${ADMIN_API}/${endPoint}`, {
    method: 'patch',
    headers: {
      Authorization: token,
    },
    data,
  });
}
