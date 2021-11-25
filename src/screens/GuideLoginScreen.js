import React from 'react';
import Screen from '~components/layouts/Screen';
import Holder from '~components/Holder';
import Link from '~elements/Link';
import Text from '~elements/Text';

const GuideLoginScreen = ({navigation}) => {
  return (
    <Screen>
      <Text>spalshing</Text>
      <Holder>
        <Link onPress={() => navigation.goBack()}>back</Link>
      </Holder>
    </Screen>
  );
};

export default GuideLoginScreen;
