import React from 'react';
import {ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ScreenBase from '~components/layouts/ScreenBase';
import colors from '~configs/colors';

const ScreenFull = ({beforeView, afterView, alignment, children, ...props}) => {
  return (
    <ScreenBase wrapperStyle={styles.wrapper} {...props}>
      {beforeView}
      <ScrollView
        contentContainerStyle={styles.view}
        style={styles.scrollView}
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
        horizontal={false}
      >
        {children}
      </ScrollView>
      {afterView}
    </ScreenBase>
  );
};

const styles = EStyleSheet.create({
  wrapper: {},
  scrollView: {},
  view: {},
});

export default ScreenFull;
