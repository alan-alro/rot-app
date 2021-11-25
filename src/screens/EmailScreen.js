import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AuthScreen from '~components/layouts/AuthScreen';
import VerifyEmailForm from '~components/forms/VerifyEmailForm';
import Divider from '~components/Divider';
import Holder from '~components/Holder';
import TextSmall from '~elements/TextSmall';
import Button from '~elements/Button';
import colors from '~configs/colors';

const EmailScreen = ({navigation}) => {
  return (
    <AuthScreen>
      <View style={styles.wrapper}>
        <TextSmall>Some text here like "enter your email address that's registered with your tour."</TextSmall>
        <VerifyEmailForm style={styles.form} />
        <Divider style={styles.devider} color={colors.secondary} text="or" />
        <Holder>
          <Button>Login with tour code</Button>
          <Button>Login as guilde</Button>
        </Holder>
      </View>
    </AuthScreen>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    width: '80%',
  },
  form: {
    marginTop: 25,
  },
  devider: {marginVertical: 15},
});

export default EmailScreen;
