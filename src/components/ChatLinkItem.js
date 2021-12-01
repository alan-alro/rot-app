import React from 'react';
import {View, Pressable, Linking} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useNavigation} from '@react-navigation/native';
import Text from '~elements/Text';
import Icon from '~elements/Icon';

const ChatLinkItem = ({tour, type, style, ...props}) => {
  let value = '';

  switch (tour.chat_type.toLowerCase()) {
    case 'whatsapp':
      key = 'whatsapp_group_url';
      break;
    case 'signal':
      key = 'signal_group_url';
      break;
    case 'facebook':
      key = 'facebook_group_url';
      break;
  }

  return (
    <View style={[styles.wrapper, style]} {...props}>
      {tour[key] && tour[key].length > 0 ? (
        <View style={[styles.content]}>
          <View style={[styles.contentLeft]}>
            <Text>{tour.chat_type}</Text>
          </View>
          <View style={[styles.contentRight]}>
            <Pressable onPress={async () => await Linking.openURL(tour[key])}>
              <Text>{tour[key]}</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={[styles.content]}>
          <Text>Not available</Text>
        </View>
      )}
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    marginBottom: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentLeft: {
    flexDirection: 'row',
  },
});

export default ChatLinkItem;
