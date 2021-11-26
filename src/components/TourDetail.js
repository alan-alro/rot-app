import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TabView} from 'react-native-tab-view';
import Holder from '~components/Holder';
import InfoBox from '~components/InfoBox';
import Button from '~elements/Button';
import Image from '~elements/Image';
import Text from '~elements/Text';
import Html from '~elements/Html';
import Tags from '~elements/Tags';
import Tag from '~elements/Tag';
import Tabs from '~elements/Tabs';
import Divider from '~components/Divider';
import colors from '~configs/colors';
import {dropShadow} from '~configs/styles';

const TourDetail = ({tour, ...props}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper} {...props}>
      <Image source={{uri: tour.featured_image}} />
      <View style={styles.body}>
        <Tags>
          <Tag evaluator={tour.acf.number_of_days}>{tour.acf.number_of_days} days</Tag>
          <Tag evaluator={tour.acf.tour_type}>{tour.acf.tour_type}</Tag>
        </Tags>

        <Text textStyle={styles.titleText} bold text={tour.title}></Text>
        <Text textStyle={styles.subTitleText} text={tour.sub_title}></Text>

        <Text textStyle={styles.descriptionText} evaluation={tour.acf['short_description:']}>
          {tour.acf['short_description:']}
        </Text>

        <Divider style={{marginVertical: 25}} />

        <Tabs
          tabs={{
            info: {
              label: 'Infomation',
              render: null,
            },
            itinerary: {
              label: 'Itinerary',
              render: null,
            },
            contacts: {
              label: 'Contacts',
              render: null,
            },
            resources: {
              label: 'Resources',
              render: null,
            },
          }}
        />

        <InfoBox heading="Tour Highlights" evaluator={tour.acf.long_description}>
          <Html source={{html: tour.acf.long_description}} />
        </InfoBox>

        <InfoBox heading="Tour Availability" evaluator={tour.acf.tour_months}>
          <Html source={{html: `<p>${tour.acf.tour_months.join(', ')}</p>`}} />
        </InfoBox>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {},
  body: {
    padding: 10,
  },
  titleText: {
    marginTop: -10,
    fontSize: 28,
    color: colors.secondary,
  },
  subTitleText: {
    marginTop: -15,
    fontSize: 22,
    color: colors.lightSecondary,
  },
  descriptionText: {
    fontSize: 15,
  },
});

export default TourDetail;
