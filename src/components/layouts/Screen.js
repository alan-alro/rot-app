import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ScreenBase from '~components/layouts/ScreenBase';
import colors from '~configs/colors';

const ScreenFull = props => {
  const dynamicStyles = [styles.view];

  if ((props.alignment = 'centered')) {
    dynamicStyles.push({
      justifyContent: 'center',
      alignItems: 'center',
    });
  }

  return (
    <ScreenBase>
      <View style={dynamicStyles}>{props.children}</View>
    </ScreenBase>
  );
};

const styles = EStyleSheet.create({
  view: {flex: 1},
});

export default ScreenFull;
