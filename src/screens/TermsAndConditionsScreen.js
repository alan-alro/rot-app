import React, {useState, useEffect} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {useGlobalState} from '~hooks/useGlobalContext';
import Api from '~libraries/Api';
import ScreenHeader from '~components/layouts/ScreenHeader';
import TourDetail from '~components/TourDetail';
import LoadingIndicator from '~components/LoadingIndicator';
import Link from '~elements/Link';
import Html from '~elements/Html';
import Text from '~elements/Text';

const TermsAndConditionsScreen = () => {
  const [loaded, setLoaded] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [content, setContent] = useState(null);

  const loadContent = async () => {
    const data = await Api('/pages/detail', {page: 'tas'});
    setContent(data.data?.content);
    setLoaded(true);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadContent();
    setRefreshing(false);
  };

  useEffect(() => {
    loadContent();
  }, []);

  return (
    <ScreenHeader
      headerText="Terms and Conditions"
      showBack
      scrollViewProps={{
        refreshControl: <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />,
      }}
    >
      {loaded ? (
        <View style={{padding: 10}}>
          <Html source={{html: content || ''}} />
        </View>
      ) : (
        <LoadingIndicator />
      )}
    </ScreenHeader>
  );
};

export default TermsAndConditionsScreen;
