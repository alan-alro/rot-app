import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from '~elements/Text';
import themes from '~configs/themes';

const TextSmall = ({textStyle}, props) => {
  return (
    <Text textStyle={[styles.text, textStyle]} {...props}>
      {children}
    </Text>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontSize: themes.smallFontSize,
  },
});

export default Text;
