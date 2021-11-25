import React, {useState} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Holder from '~components/Holder';
import ButtonInline from '~elements/ButtonInline';
import InputEmail from '~elements/InputEmail';
import InputPassword from '~elements/InputPassword';
import Icon from '~elements/Icon';

const VerifyEmailForm = ({style}, props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <View style={[styles.wrapper, style]}>
      <InputEmail label="Email Address:" value={email} onChange={setEmail} />
      <Holder align="right">
        <ButtonInline>
          Continue <Icon name={'comments'} />
        </ButtonInline>
      </Holder>
      <InputPassword label="Password:" value={password} onChange={setPassword} hidden={passwordHidden} />
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {},
});

export default VerifyEmailForm;
