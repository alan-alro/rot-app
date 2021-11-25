import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from '~elements/Text';
import colors from '~configs/colors';
import themes from '~configs/themes';

const Input = props => {
  const {
    label,
    value,
    onChange,
    hidden,
    disabled,
    required,
    loading,
    style,
    labelStyle,
    labelProps,
    controlStyle,
    inputStyle,
    beforeLabel,
    afterLabel,
    beforeControl,
    afterControl,
    beforeInput,
    afterInput,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(rest.autoFocus);
  const editable = true;
  const dynamicStyles = [];

  if (hidden) {
    return null;
  }

  if (disabled) {
    editable = false;
    dynamicStyles.push(styles.disabled);
  }

  if (loading) {
    editable = false;
    dynamicStyles.push(styles.loading);
  }

  if (disabled) {
    editable = false;
    dynamicStyles.push(styles.disabled);
  }

  if (isFocused) {
    dynamicStyles.push(styles.focused);
  }

  return (
    <View style={[styles.wrapper, ...dynamicStyles, style]}>
      <Text textStyle={[styles.label, labelStyle]} {...labelProps}>
        {beforeLabel}
        {label}
        {afterLabel}
      </Text>
      {beforeControl}
      <View style={[styles.control, controlStyle]}>
        {beforeInput}
        <TextInput
          {...{
            autoCapitalize: 'none',
            autocomplete: 'off',
            autoCorrect: false,
            editable: editable,
            onBlur: () => setIsFocused(false),
            onFocus: () => setIsFocused(true),
            placeholderTextColor: colors.lightGrey,
            returnKeyType: 'done',
            ...rest,
          }}
          style={[styles.input, inputStyle]}
          onChangeText={onChange}
          value={value}
        />
        {afterInput}
      </View>
      {afterControl}
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {marginVertical: 10},
  label: {
    letterSpacing: 0.5,
    color: colors.primary,
  },
  control: {},
  input: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: themes.inputFontSize,
    fontFamily: themes.baseFontFamily,
    color: colors.darkGrey,
  },
});

export default Input;
