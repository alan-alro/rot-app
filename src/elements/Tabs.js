import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from '~elements/Text';

const Tabs = ({tabs, ...props}) => {
  const [current, setCurrent] = useState(Object.keys(tabs)[0]);
  const tabLength = Object.keys(tabs).length;

  return (
    <View style={styles.wrapper} {...props}>
      <View style={styles.nav}>
        {Object.entries(tabs).map(([key, tab], index) => {
          const active = key == current;
          return (
            <Pressable style={[styles.navItem, active ? styles.navItemActive : null]} key={index}>
              <Text textStyle={[styles.navItemText, active ? styles.navItemTextActive : null]}>{tab.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {},
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    marginRight: 5,
  },
  navItem: {
    marginRight: 5,
  },
  navItemSeperator: {
    marginRight: 5,
  },
});

export default Tabs;
