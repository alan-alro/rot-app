import React from 'react';
import {Text as RnText} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import colors from '~configs/colors';
import themes from '~configs/themes';

const Text = ({children, textStyle, bold}, props) => {
  return (
    <RnText style={[styles.text, bold ? styles.bold : null, textStyle]} {...props}>
      {children}
    </RnText>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontFamily: themes.baseFontFamily,
    fontSize: themes.baseFontSize,
    color: colors.maintext,
    // lineHeight: themes.baseFontSize * 1.2,
    // backgroundColor: colors.green,
  },
  bold: {
    fontFamily: themes.baseRontFamilyBold,
  },
});

export default Text;
