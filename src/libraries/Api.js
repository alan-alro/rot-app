import {create} from 'apisauce';

const api = create({
  baseURL: 'https://7d0e-2001-569-7b96-3900-bd96-ec03-6cba-6a47.ngrok.io/rot-api',
  headers: {
    'x-rot-app-version': '1.0.0',
    'x-rot-app-patch': '1',
    'x-rot-app-source': 'com.royaleorchidtours.app.debug',
    'x-rot-device-token': '80de848764a9804b86dbb5ea5a558c8e9966d315',
    'x-rot-app-version': '5e796e48332af4142b10ca0f86e65d9bfdb05884',
  },
});

export default (url, data) => {
  return api.post(url, data).then(({status, data}) => {
    // if (!/[2|4]\d\d/.test(status)) {
    return data;
    // }

    return data;
  });
};
