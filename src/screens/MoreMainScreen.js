import React, {useState, useEffect} from 'react';
import {FlatList, View, Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import {cacheKey} from '~hooks/useGlobalContext';
import ScreenHeader from '~components/layouts/ScreenHeader';
import NavigationItem from '~components/NavigationItem';
import colors from '~configs/colors';

const MoreMainScreen = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.removeItem(cacheKey);
    RNRestart.Restart();
  };

  const launchContact = async () => {
    const data = await Api('/settings/check');
    const email = data.data.settings['app_static_pages__contact_email'];
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <ScreenHeader headerText="More">
      <View style={{padding: 15}}>
        <NavigationItem screen="Settings" label="Settings" />
        <NavigationItem screen="AboutUs" label="About Us" />
        <NavigationItem screen="TermsAndConditions" label="Terms & Conditions" />
        <NavigationItem screen="HelpsFAQ" label="Helps & FAQs" />
        <NavigationItem action={launchContact} label="Contact Us" />
        <NavigationItem action={logout} label="Logout" textStyle={{color: colors.red}} />
      </View>
    </ScreenHeader>
  );
};

export default MoreMainScreen;
