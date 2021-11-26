import {create} from 'apisauce';

export const apiDomain = 'https://5e96-2001-569-7b96-3900-8425-eb5d-e418-284b.ngrok.io';

export const apiClient = create({
  baseURL: `${apiDomain}/rot-api`,
  headers: {
    'x-rot-app-version': '',
    'x-rot-app-patch': '',
    'x-rot-app-source': '',
    'x-rot-device-token': '',
    'x-rot-auth-token': '',
    'x-rot-debugging': '1',
  },
});

export const api = (url, postData) => {
  return apiClient.post(url, postData).then(({status, data}) => {
    return data;
  });
};

export default api;
