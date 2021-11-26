import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import TourDetail from '~components/TourDetail';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Text from '~elements/Text';

const TourDetailScreen = ({navigation, route}) => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [tour, setTour] = useState(null);

  const loadTour = async () => {
    const data = await Api('/tours/detail', {id: route.params.id});
    setTour(data.data);
    setLoaded(true);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTour();
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  useEffect(() => {
    loadTour();
  }, [route.params.id]);

  return (
    <ScreenHeader headerText="Tour Detail" showBack>
      {loaded ? <TourDetail tour={tour} /> : <LoadingIndicator />}
    </ScreenHeader>
  );
};

export default TourDetailScreen;
