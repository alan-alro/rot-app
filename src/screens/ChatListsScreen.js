import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, RefreshControl} from 'react-native';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import ChatBox from '~components/ChatBox';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Text from '~elements/Text';

const ChatListsScreen = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [rooms, setRooms] = useState([]);

  const loadTours = async () => {
    // const data = await Api('/tours/list', {type: 'active'});
    const data = await Api('/chats/list', {type: 'all'});
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
    <ScreenHeader noScroll headerText="Chat Groups">
      {loaded ? (
        rooms.length > 0 ? (
          <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={rooms}
            renderItem={({item, index}) => <ChatBox tour={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <ScrollView
            contentContainerStyle={{padding: 15}}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          >
            <Text>No chat rooms available at the moment</Text>
          </ScrollView>
        )
      ) : (
        <LoadingIndicator />
      )}
    </ScreenHeader>
  );
};

export default ChatListsScreen;
