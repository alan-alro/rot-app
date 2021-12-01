import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Itinerary from '~components/Itinerary';
import Html from '~elements/Html';

const TourTabItinerary = ({tour, style, ...props}) => {
  const itineraries = tour.acf?.daily_Itinerary || [];
  return itineraries.map((itinerary, index) => <Itinerary key={index} itinerary={itinerary} />);
};

const styles = EStyleSheet.create({
  wrapper: {},
});

export default TourTabItinerary;
