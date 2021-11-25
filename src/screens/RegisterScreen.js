import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import AuthScreen from '~components/layouts/AuthScreen';
import PasswordForm from '~components/forms/PasswordForm';
import Divider from '~components/Divider';
import Holder from '~components/Holder';
import Icon from '~elements/Icon';
import Text from '~elements/Text';
import TextSmall from '~elements/TextSmall';
import Link from '~elements/Link';
import colors from '~configs/colors';

const RegisterScreen = ({navigation, route}) => {
  const [loggedIn, setLoggedIn] = useGlobalState('loggedIn');
  const [currentUser, setCurrentUser] = useGlobalState('currentUser');
  const [accessToken, setAccessToken] = useGlobalState('accessToken');

  const onSuccess = data => {
    setLoggedIn(true);
    setCurrentUser(data.user);
    setAccessToken(data.access_token);
  };

  const onSubmit = post => {
    return Api('/auth/register', post);
  };

  return (
    <AuthScreen>
      <View style={styles.wrapper}>
        <TextSmall>Some text here like "You do not have an account yet, create one to start."</TextSmall>
        <PasswordForm
          email={route.params.email}
          style={styles.form}
          onSubmit={onSubmit}
          onSuccess={onSuccess}
          submitText="Create Account"
        />
        <Holder>
          <Link onPress={() => navigation.goBack()} style={styles.link} textStyle={styles.linkText}>
            <Icon name="angle-left" /> Back
          </Link>
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
  link: {marginTop: 15},
  linkText: {fontSize: 14},
});

export default RegisterScreen;
