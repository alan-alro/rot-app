import React, {useState} from 'react';
import {Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from '~elements/Text';
import colors from '~configs/colors';

const Button = ({children, disabled, theme, style, textStyle, textProps}, props) => {
  const dynamicStyles = [styles.wrapper, getTheme(theme).button, style];
  const dynamicTextStyles = [styles.text, getTheme(theme).text, textStyle];

  if (disabled) {
    dynamicStyles.push(styles.disabled);
    dynamicTextStyles.push(styles.disabledText);
  }

  return (
    <Pressable
      {...{
        style: dynamicStyles,
        disabled,
        ...props,
      }}
    >
      <Text textStyle={dynamicTextStyles} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

const getTheme = theme => {
  switch (theme) {
    default:
      return {
        text: {
          color: colors.white,
        },
        button: {
          backgroundColor: colors.primary,
        },
      };
  }
};

const styles = EStyleSheet.create({
  wrapper: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.red,
    color: colors.white,
    marginVertical: 5,
    borderRadius: 5,
    width: 180,
  },
  text: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Button;
