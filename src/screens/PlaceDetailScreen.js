import React, {useState, useEffect} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import PlaceDetail from '~components/PlaceDetail';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Text from '~elements/Text';

const PlaceDetailScreen = ({navigation, route}) => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [place, setPlace] = useState(null);

  const loadPlace = async () => {
    const data = await Api('/destinations/detail', {id: route.params.id});
    setPlace(data.data);
    console.log(JSON.stringify(data.data));
    setLoaded(true);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPlace();
    setRefreshing(false);
  };

  useEffect(() => {
    loadPlace();
  }, [route.params.id]);

  return (
    <ScreenHeader
      headerText="Place Detail"
      showBack
      scrollViewProps={{
        refreshControl: <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />,
      }}
    >
      {loaded ? <PlaceDetail place={place} /> : <LoadingIndicator />}
    </ScreenHeader>
  );
};

export default PlaceDetailScreen;
