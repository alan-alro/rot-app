import React from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

import {View, Text, Pressable} from 'react-native';
import {getGlobalState, useGlobalState, setGlobalState, setGlobalStateCallback} from '~hooks/useGlobalContext';

const HomeScreen = () => {
  // console.log('HomeScreen');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Home />
      <Sub />
      <Sub2 />
    </View>
  );
};

const Home = () => {
  // const here = getGlobalStateCallback(state => state.a.b[0].c);
  const [loggedIn, setLoggedIn] = useGlobalState('logedIn');
  const alterLists = setGlobalStateCallback('lists', (lists, value) => {
    lists.push(value);
    // AsyncStorage.setItem('lists', JSON.stringify(lists));
  });

  // console.log(here);
  // console.log('Home');
  return (
    <View>
      <Text>Home Screen - {loggedIn ? 'yes' : 'no'}</Text>
      <Pressable onPress={() => setLoggedIn(true)}>
        <Text>logIn</Text>
      </Pressable>
      <Pressable onPress={() => setLoggedIn(false)}>
        <Text>logOut</Text>
      </Pressable>
      <Pressable onPress={() => alterLists(new Date().toString())}>
        <Text>add list</Text>
      </Pressable>
      <Pressable onPress={async () => console.log(await AsyncStorage.getItem('cached'))}>
        <Text>checked</Text>
      </Pressable>
    </View>
  );
};

const Sub = () => {
  const [subValue] = useGlobalState('subValue', false);
  const setSubValue = setGlobalState('subValue', false);
  // console.log('sub');
  return (
    <View>
      <Text>{subValue}</Text>

      <Pressable onPress={() => setSubValue(new Date().toString())}>
        <Text>set</Text>
      </Pressable>
    </View>
  );
};

const Sub2 = () => {
  const subValue = getGlobalState('subValue', false);
  const lists = getGlobalState('lists', []);
  // console.log('sub2');
  return (
    <View>
      <Text>{subValue}</Text>
      {lists.length > 0 &&
        lists.map((list, i) => {
          return <Text key={i}>{list}</Text>;
        })}
    </View>
  );
};
