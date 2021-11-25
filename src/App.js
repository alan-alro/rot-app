import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import EStyleSheet from 'react-native-extended-stylesheet';
import RootNavigator from '~navigations/RootNavigator';
import useAppReadied from '~hooks/useAppReadied';
import SplashScreen from '~screens/SplashScreen';
import {GlobalStateProvider} from '~hooks/useGlobalContext';

EStyleSheet.build();

const App = () => {
  const isAppReadied = useAppReadied();

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <GlobalStateProvider>{isAppReadied ? <RootNavigator /> : <SplashScreen />}</GlobalStateProvider>;
};

export default App;
