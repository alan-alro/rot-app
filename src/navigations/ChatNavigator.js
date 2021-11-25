import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceholderScreen from '~screens/PlaceholderScreen';

const Stack = createNativeStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChatDetail" component={PlaceholderScreen} />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
