import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import StreamBox from '~components/StreamBox';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Text from '~elements/Text';

const RoomsScreen = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [rooms, setRooms] = useState([]);

  const loadTours = async () => {
    const data = await Api('/tours/list', {type: 'active'});
    // const data = await Api('/streams/list', {type: 'all'});
    console.log(JSON.stringify(data.data));
    setRooms(data.data);
    setLoaded(true);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTours();
    setRefreshing(false);
  };

  useEffect(() => {
    loadTours();
  }, []);

  return (
    <ScreenHeader noScroll headerText="Live Streams">
      {loaded ? (
        rooms.length > 0 ? (
          <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={rooms}
            renderItem={({item, index}) => <StreamBox tour={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={{padding: 15}}>
            <Text>No streams available at the moment</Text>
          </View>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScreenHeader>
  );
};

export default RoomsScreen;
