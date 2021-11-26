import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import TourBox from '~components/TourBox';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Text from '~elements/Text';

const ToursListScreen = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [type, setType] = useState('all');
  const [tours, setTours] = useState([]);

  const loadTours = async () => {
    const data = await Api('/tours/list', {type});
    setTours(data.data);
    setLoaded(true);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTours();
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  useEffect(() => {
    loadTours();
  }, []);

  return (
    <ScreenHeader noScroll headerText="My Tours">
      {loaded ? (
        <FlatList
          refreshing={refreshing}
          onRefresh={onRefresh}
          data={tours}
          renderItem={({item, index}) => <TourBox tour={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <LoadingIndicator />
      )}
    </ScreenHeader>
  );
};

export default ToursListScreen;
