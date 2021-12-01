import React, {useEffect} from 'react';
import {getFullGlobalState} from '~hooks/useGlobalContext';
import ScreenHeader from '~components/layouts/ScreenHeader';
import Holder from '~components/Holder';
import Link from '~elements/Link';
import Text from '~elements/Text';

const DevScreen = ({navigation}) => {
  const states = getFullGlobalState();

  useEffect(() => console.log(JSON.stringify(states, null, 2)), []);

  return (
    <ScreenHeader headerText="Developer" containerStyle={{padding: 15}} showBack>
      <Text>DevScreen</Text>
      <Text>{JSON.stringify(states, null, 4)}</Text>
    </ScreenHeader>
  );
};

export default DevScreen;
