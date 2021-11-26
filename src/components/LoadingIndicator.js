import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Holder from '~components/Holder';
import Loading from '~elements/Loading';

const LoadingIndicator = ({style, ...props}) => {
  return (
    <Holder style={[styles.wrapper, style]} {...props}>
      <Loading />
    </Holder>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    padding: 20,
  },
});

export default LoadingIndicator;
