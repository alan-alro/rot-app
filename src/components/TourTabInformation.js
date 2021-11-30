import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import InfoBox from '~components/InfoBox';
import InfoLine from '~components/InfoLine';
import Html from '~elements/Html';
import Bullet from '~elements/Bullet';
import colors from '~configs/colors';

const TourTabInformation = ({tour, style, ...props}) => {
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <InfoBox heading="Tour Highlights" evaluator={tour.acf.long_description}>
        <Html source={{html: tour.acf.long_description}} />
      </InfoBox>

      <InfoLine heading="Number of Days" value={tour.acf.number_of_days} />
      <InfoLine heading="Departure At" value={tour.acf.departure_text} />

      {tour.show_tour_dates ? (
        <>
          <InfoLine heading="Start Date" value={tour.tour_start_date} />
          <InfoLine heading="End Date" value={tour.tour_end_date} />
        </>
      ) : (
        <InfoBox heading="Tour Availability" evaluator={tour.acf.tour_months}>
          <Html source={{html: `<p>${tour.acf.tour_months.join(', ')}</p>`}} />
        </InfoBox>
      )}

      <InfoBox heading="Included" evaluator={tour.acf.included}>
        {tour.acf.included.map((included, index) => (
          <Bullet key={index} iconStyle={{color: colors.success}}>
            {included.description}
          </Bullet>
        ))}
      </InfoBox>

      <InfoBox heading="Not Included" evaluator={tour.acf.not_included}>
        {tour.acf.not_included.map((notIncluded, index) => (
          <Bullet key={index} icon="times-circle" iconStyle={{color: colors.error}}>
            {notIncluded.description}
          </Bullet>
        ))}
      </InfoBox>
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {},
});

export default TourTabInformation;
