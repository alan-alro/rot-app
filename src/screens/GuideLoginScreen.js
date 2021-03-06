import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api, {apiClient} from '~libraries/Api';
import AuthScreen from '~components/layouts/AuthScreen';
import GuideCodeForm from '~components/forms/GuideCodeForm';
import Divider from '~components/Divider';
import Holder from '~components/Holder';
import Icon from '~elements/Icon';
import Text from '~elements/Text';
import TextSmall from '~elements/TextSmall';
import Link from '~elements/Link';
import colors from '~configs/colors';

const GuideLoginScreen = ({navigation}) => {
  const [loggedIn, setLoggedIn] = useGlobalState('loggedIn');
  const [currentUser, setCurrentUser] = useGlobalState('currentUser');
  const [accessToken, setAccessToken] = useGlobalState('accessToken');

  const onSuccess = data => {
    setCurrentUser(data.user);
    setAccessToken(data.access_token);
    apiClient.setHeader('x-rot-auth-token', data.access_token);
    setLoggedIn(true);
  };

  return (
    <AuthScreen>
      <View style={styles.wrapper}>
        <TextSmall>Some text here like "Ask your tour leader for access code."</TextSmall>
        <GuideCodeForm style={styles.form} onSuccess={onSuccess} />
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

export default GuideLoginScreen;
