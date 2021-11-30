import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import PlaceBox from '~components/PlaceBox';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Text from '~elements/Text';

const PlacesListScreen = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [places, setPlaces] = useState([]);

  const loadPlaces = async () => {
    const data = await Api('/destinations/list');
    setPlaces(data.data);
    setLoaded(true);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadPlaces();
    setRefreshing(false);
  };

  useEffect(() => {
    loadPlaces();
  }, []);

  return (
    <ScreenHeader noScroll headerText="Places">
      {loaded ? (
        <FlatList
          refreshing={refreshing}
          onRefresh={onRefresh}
          data={places}
          numColumns={2}
          renderItem={({item, index}) => <PlaceBox place={item} style={{flex: 1 / 2}} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <LoadingIndicator />
      )}
    </ScreenHeader>
  );
};

export default PlacesListScreen;
