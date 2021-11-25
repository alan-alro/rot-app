import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmailScreen from '~screens/EmailScreen';
import RegisterScreen from '~screens/RegisterScreen';
import LoginScreen from '~screens/LoginScreen';
import GuideLoginScreen from '~screens/GuideLoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="GuideLogin" component={GuideLoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
