import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import InfoBox from '~components/InfoBox';
import UserInfo from '~components/UserInfo';
import ContactInfo from '~components/ContactInfo';
import Divider from '~components/Divider';
import Image from '~elements/Image';
import Html from '~elements/Html';

const TourTabContacts = ({tour, style, ...props}) => {
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <InfoBox heading="Tour Manager" evaluator={tour.acf.tour_manager}>
        <UserInfo user={tour.acf.tour_manager} />
      </InfoBox>

      <InfoBox heading="Emergency Contacts" evaluator={tour.acf.emergency_contacts}>
        {tour.acf.emergency_contacts.map((contact, index) => (
          <React.Fragment key={index}>
            <ContactInfo contact={contact} />
            {index < tour.acf.emergency_contacts.length - 1 && <Divider style={{marginVertical: 25}} />}
          </React.Fragment>
        ))}
      </InfoBox>
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {},
});

export default TourTabContacts;
