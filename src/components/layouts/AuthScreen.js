import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ScreenFull from '~components/layouts/ScreenFull';
import LogoWithText from '~components/LogoWithText';

const AuthScreen = props => {
  return (
    <ScreenFull alignment="centered">
      <LogoWithText style={styles.logo} />
      {props.children}
    </ScreenFull>
  );
};

const styles = EStyleSheet.create({
  logo: {
    marginBottom: 25,
  },
});

export default AuthScreen;
