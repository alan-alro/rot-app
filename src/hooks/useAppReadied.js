import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import Constants from 'expo-constants';
import RNBootSplash from 'react-native-bootsplash';
import DeviceInfo from 'react-native-device-info';
import {useGlobalState, getGlobalState} from '~hooks/useGlobalContext';
import Api, {apiClient} from '~libraries/Api';

const useAppReadied = () => {
  const [readied, setReadied] = useState(false);
  const [deviceToken, setDeviceToken] = useGlobalState('deviceToken');
  const usingInitialState = getGlobalState('usingInitialState');
  const accessToken = getGlobalState('accessToken');
  const apiUrl = getGlobalState('apiUrl');

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  useEffect(() => {
    if (usingInitialState) {
      return;
    }

    (async () => {
      if (apiUrl.length > 0) apiClient.setBaseURL(apiUrl);
      apiClient.setHeader('x-rot-app-version', Constants.nativeAppVersion);
      apiClient.setHeader('x-rot-app-version', Constants.nativeAppVersion);
      apiClient.setHeader('x-rot-app-patch', Constants.nativeBuildVersion);
      apiClient.setHeader('x-rot-app-source', await DeviceInfo.getInstallerPackageName);
      apiClient.setHeader('x-rot-device-token', deviceToken);
      apiClient.setHeader('x-rot-auth-token', accessToken);

      if (!deviceToken) {
        const response = await Api('/devices/register', {
          unique_id: await DeviceInfo.syncUniqueId(),
          base_os: Platform.OS,
          brand: await DeviceInfo.getBrand(),
          device_id: await DeviceInfo.getDeviceId(),
          device_type: await DeviceInfo.getDeviceType(),
        });

        setDeviceToken(response.data.device_token);
        apiClient.setHeader('x-rot-device-token', response.data.device_token);
      }

      await new Promise(re => setTimeout(re, 500));

      setReadied(true);
    })();
  }, [usingInitialState]);

  return readied;
};

export default useAppReadied;
