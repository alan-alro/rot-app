import {create} from 'apisauce';

export const apiClient = create({
  baseURL: 'https://7d0e-2001-569-7b96-3900-bd96-ec03-6cba-6a47.ngrok.io/rot-api',
  headers: {
    'x-rot-app-version': '',
    'x-rot-app-patch': '',
    'x-rot-app-source': '',
    'x-rot-device-token': '',
    'x-rot-auth-token': '',
  },
});

export default (url, data) => {
  return apiClient.post(url, data).then(({status, data}) => {
    return data;
  });
};
