import React, {useState, useEffect} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {useGlobalState, getGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import TourDetail from '~components/TourDetail';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Text from '~elements/Text';

const SpeakScreen = ({navigation, route}) => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [tour, setTour] = useState(null);
  const currentUser = getGlobalState('currentUser');
  console.log(currentUser);

  const loadTour = async () => {
    const data = await Api('/tours/detail', {id: currentUser.meta.tour_id});
    setTour(data.data);
    setLoaded(true);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTour();
    setRefreshing(false);
  };

  useEffect(() => {
    loadTour();
  }, []);

  return (
    <ScreenHeader
      headerText="Live Stream"
      scrollViewProps={{
        refreshControl: <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />,
      }}
    >
      {loaded ? <Text>{JSON.stringify({...route.params, tour})}</Text> : <LoadingIndicator />}
    </ScreenHeader>
  );
};

export default SpeakScreen;
