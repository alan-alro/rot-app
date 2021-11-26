import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getGlobalState, useGlobalState} from '~hooks/useGlobalContext';
import MainNavigator from '~navigations/MainNavigator';
import AuthNavigator from '~navigations/AuthNavigator';
import DevScreen from '~screens/DevScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const loggedIn = getGlobalState('loggedIn');
  const [navigationState, setNavigationState] = useGlobalState('navigationState');

  const maybeSaveNavigationState = state => {
    const currentRoute = state.routes[state.index].name;

    if (currentRoute == 'Developer') {
      return;
    }

    setNavigationState(JSON.stringify(state));
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={JSON.parse(navigationState || null)}
      onStateChange={maybeSaveNavigationState}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {loggedIn ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
        <Stack.Screen name="Developer" component={DevScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
