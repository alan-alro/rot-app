import React from 'react';
import {ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ScreenBase from '~components/layouts/ScreenBase';
import colors from '~configs/colors';

const ScreenFull = props => {
  const dynamicStyles = [styles.container];

  if ((props.alignment = 'centered')) {
    dynamicStyles.push({
      justifyContent: 'center',
      alignItems: 'center',
    });
  }

  return (
    <ScreenBase>
      <ScrollView
        contentContainerStyle={dynamicStyles}
        style={styles.view}
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
        horizontal={false}
      >
        {props.children}
      </ScrollView>
    </ScreenBase>
  );
};

const styles = EStyleSheet.create({
  container: {flexGrow: 1},
  view: {flex: 1},
});

export default ScreenFull;
