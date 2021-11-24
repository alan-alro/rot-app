import {useEffect, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';

const useAppReadied = () => {
  const [readied, setReadied] = useState(false);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  useEffect(() => {
    (async () => {
      await new Promise(re => setTimeout(re, 500));

      setReadied(true);
    })();
  }, []);

  return readied;
};

export default useAppReadied;
