import {create} from 'apisauce';

export const apiDomain = 'https://8761-2001-569-5203-1b00-f8bd-686f-2377-e3b.ngrok.io';

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
  return apiClient.post(url, postData).then(({ok, problem, status, data}) => {
    return data;
  });
};

export default api;
