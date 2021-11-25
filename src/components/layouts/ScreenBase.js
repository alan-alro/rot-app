import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '~configs/colors';

const ScreenBase = props => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  wrapper: {flex: 1, backgroundColor: colors.lightSecondary},
  keyboardView: {flex: 1},
});

export default ScreenBase;
