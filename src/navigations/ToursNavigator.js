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
      <Stack.Screen name="AllTours" component={PlaceholderScreen} />
      <Stack.Screen name="TourDetail" component={PlaceholderScreen} />
    </Stack.Navigator>
  );
};

export default ToursNavigator;
