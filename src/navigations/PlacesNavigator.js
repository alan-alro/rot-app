import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlaceholderScreen from '~screens/PlaceholderScreen';

const Stack = createNativeStackNavigator();

const ToursNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AllPlaces" component={PlaceholderScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceholderScreen} />
    </Stack.Navigator>
  );
};

export default ToursNavigator;
