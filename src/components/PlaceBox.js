import React from 'react';
import {View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Holder from '~components/Holder';
import Button from '~elements/Button';
import Image from '~elements/Image';
import Text from '~elements/Text';
import colors from '~configs/colors';
import {dropShadow} from '~configs/styles';

const PlaceBox = ({place, style, ...props}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.wrapper, style]}
      {...props}
      onPress={() => navigation.navigate('PlaceDetail', {id: place.id})}
    >
      <Image source={{uri: place.featured_image}} />
      <View style={styles.body}>
        <Text textStyle={styles.titleText}>{place.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    margin: 5,
    ...dropShadow,
  },
  body: {
    backgroundColor: colors.white,
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    color: colors.secondary,
  },
});

export default PlaceBox;
