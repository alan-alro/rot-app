import {create} from 'apisauce';

export const apiDomain = 'https://9883-2001-569-7b96-3900-f07e-c81c-6136-114d.ngrok.io';
// export const apiDomain = 'https://royaleorchidtours.alro8.com';

export const apiClient = create({
  baseURL: `${apiDomain}/rot-api`,
  headers: {
    'x-rot-app-version': '',
    'x-rot-app-patch': '',
    'x-rot-app-source': '',
    'x-rot-device-token': '',
    'x-rot-auth-token': '',
  },
});

export const api = (url, postData) => {
  return apiClient.post(url, postData).then(({ok, problem, status, data}) => {
    // 401 then logout
    return data;
  });
};

export default api;
