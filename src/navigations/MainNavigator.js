import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ToursNavigator from '~navigations/ToursNavigator';
import PlacesNavigator from '~navigations/PlacesNavigator';
import ListenNavigator from '~navigations/ListenNavigator';
import ChatNavigator from '~navigations/ChatNavigator';
import MoreNavigator from '~navigations/MoreNavigator';
import Icon from '~elements/Icon';
import colors from '~configs/colors';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarStyle: {height: Platform.OS == 'ios' ? 80 : 60},
        // tabBarItemStyle: {height: 50, flex: 1, alignItems: 'center'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Tours':
              iconName = 'map-marker';
              break;
            case 'Places':
              iconName = 'globe';
              break;
            case 'Listen':
              iconName = 'assistive-listening-systems';
              break;
            case 'Chat':
              iconName = 'whatsapp';
              break;
            case 'More':
              iconName = 'bars';
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Tours" component={ToursNavigator} />
      <Tab.Screen name="Places" component={PlacesNavigator} />
      <Tab.Screen name="Listen" component={ListenNavigator} />
      <Tab.Screen name="Chat" component={ChatNavigator} />
      <Tab.Screen name="More" component={MoreNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
