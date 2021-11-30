import React from 'react';
import {View, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useNavigation} from '@react-navigation/native';
import Text from '~elements/Text';
import Icon from '~elements/Icon';

const StreamItem = ({tourId, index, stream, style, ...props}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <Text bold>{`Day ${stream.day_number}: ${stream.location}`}</Text>

      <View style={[styles.content]} key={index}>
        <View style={[styles.contentLeft]}>
          <Text>Guides: {stream.tour_guide.map(guide => guide.tour_guide_name).join(', ')}</Text>
        </View>
        <View style={[styles.contentRight]}>
          <Pressable onPress={() => navigation.navigate('RoomDetail', {tourId, index, stream})}>
            <Icon name="volume-up" />
          </Pressable>
        </View>
      </View>
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

export default StreamItem;
