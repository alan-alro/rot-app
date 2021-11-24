import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import RootNavigator from '~navigations/RootNavigator';
import useAppReadied from '~hooks/useAppReadied';
import SplashScreen from '~screens/SplashScreen';
import {GlobalStateProvider} from '~hooks/useGlobalContext';

const InnerApp = () => {
  const isAppReadied = useAppReadied();

  return isAppReadied ? <RootNavigator /> : <SplashScreen />;
};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <GlobalStateProvider>
      <InnerApp />
    </GlobalStateProvider>
  );
};

export default App;
