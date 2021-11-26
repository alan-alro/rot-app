import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Holder from '~components/Holder';
import Button from '~elements/Button';
import Image from '~elements/Image';
import Text from '~elements/Text';
import colors from '~configs/colors';
import {dropShadow} from '~configs/styles';

const TourBox = ({tour, ...props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper} {...props}>
      <Image source={{uri: tour.featured_image}} />
      <View style={styles.body}>
        <Text textStyle={styles.titleText}>{tour.title}</Text>
        <Text textStyle={styles.descriptionText} evaluation={tour.short_description}>
          {tour.short_description}
        </Text>
        <Holder style={styles.actionHolder}>
          <Button onPress={() => navigation.navigate('TourDetail', {id: tour.id})}>View Detail</Button>
        </Holder>
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

export default TourBox;
