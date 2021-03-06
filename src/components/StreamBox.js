import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Holder from '~components/Holder';
import StreamItem from '~components/StreamItem';
import Button from '~elements/Button';
import Image from '~elements/Image';
import Text from '~elements/Text';
import colors from '~configs/colors';
import {dropShadow} from '~configs/styles';

const StreamBox = ({tour, ...props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper} {...props}>
      <View style={styles.body}>
        <Text textStyle={styles.titleText}>{tour.title}</Text>

        {tour.streams.map((stream, index) => (
          <StreamItem tourId={tour.id} stream={stream} key={index} index={index} />
        ))}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    margin: 15,
    ...dropShadow,
  },
  body: {
    backgroundColor: colors.white,
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    color: colors.secondary,
  },
  descriptionText: {
    fontSize: 15,
  },
  actionHolder: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});

export default StreamBox;
