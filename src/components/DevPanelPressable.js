import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MultiPressable from '~elements/MultiPressable';

const DevPanelPressable = ({children, ...props}) => {
  const navigation = useNavigation();

  return (
    <MultiPressable multiPressTimes={5} onMultiPress={() => navigation.navigate('Developer')} {...props}>
      {children}
    </MultiPressable>
  );
};

export default DevPanelPressable;
