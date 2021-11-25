import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceholderScreen from '~screens/PlaceholderScreen';

const Stack = createNativeStackNavigator();

const ListenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AllRooms" component={PlaceholderScreen} />
      <Stack.Screen name="RoomDetail" component={PlaceholderScreen} />
    </Stack.Navigator>
  );
};

export default ListenNavigator;
