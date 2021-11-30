import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Text from '~elements/Text';
import Tags from '~elements/Tags';
import Tag from '~elements/Tag';
import Html from '~elements/Html';
import colors from '~configs/colors';
import {dropShadow} from '~configs/styles';

const Itinerary = ({style, itinerary, ...props}) => {
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <Tags>
        <Tag
          evaluator={itinerary.day_number}
          background="transparent"
          textStyle={{
            color: colors.primary,
          }}
        >{`Day ${itinerary.day_number}`}</Tag>
        <Tag evaluator={itinerary.date}>{itinerary.date}</Tag>
      </Tags>

      <Text textStyle={styles.heading} bold text={itinerary.location}></Text>
      <View style={styles.headingDecoration} />
      <Html source={{html: itinerary.description}} />
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: colors.border,
    marginVertical: 10,
    borderRadius: 3,
    padding: 10,
    paddingRight: 20,
    backgroundColor: colors.white,
    ...dropShadow,
  },
  headingWrapper: {marginBottom: 15},
  heading: {
    fontSize: 24,
    color: colors.primary,
  },
  headingDecoration: {
    width: 50,
    height: 1,
    marginTop: 5,
    backgroundColor: colors.lightSecondary,
  },
});

export default Itinerary;
