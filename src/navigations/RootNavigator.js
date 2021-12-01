import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import Api, {apiClient} from '~libraries/Api';
import {getGlobalState, useGlobalState, cacheKey} from '~hooks/useGlobalContext';
import MainNavigator from '~navigations/MainNavigator';
import AuthNavigator from '~navigations/AuthNavigator';
import DevScreen from '~screens/DevScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const loggedIn = getGlobalState('loggedIn');
  const [currentUser, setCurrentUser] = useGlobalState('currentUser');
  const [navigationState, setNavigationState] = useGlobalState('navigationState');

  const maybeSaveNavigationState = state => {
    const currentRoute = state.routes[state.index].name;

    if (currentRoute == 'Developer') {
      return;
    }

    setNavigationState(JSON.stringify(state));
  };

  useEffect(() => {
    if (!loggedIn) {
      return;
    }

    (async () => {
      const data = await Api('/users/me');
      if (!data.success) {
        await AsyncStorage.removeItem(cacheKey);
        return RNRestart.Restart();
      }

      setCurrentUser(data.data.user);
    })();
  }, []);

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
