import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Screen = props => {
  return <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>{props.children}</SafeAreaView>;
};

export default Screen;
