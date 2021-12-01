import React, {useState, useEffect} from 'react';
import {View, Pressable} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av';
import {apiDomain} from '~libraries/Api';
import LoadingIndicator from '~components/LoadingIndicator';
import Text from '~elements/Text';
import Icon from '~elements/Icon';
import colors from '~configs/colors';

const AudioPlayer = ({mp3, style, ...props}) => {
  const [sound, setSound] = React.useState();
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  const src = mp3.replace('https://royaleorchidtours.test', apiDomain);

  const play = async () => {
    if (!sound) {
      setLoading(true);
      // const audio = await Audio.Sound.createAsync({uri: src}, {}, console.log);
      setLoading(false);
      // setSound(audio.sound);
      // const played = await audio.sound.playAsync();
      setPlaying(true);
      setPaused(false);
      return;
    }

    // await sound.playAsync();
    setPlaying(true);
    setPaused(false);
  };

  const pause = async () => {
    // await sound.pauseAsync();
    setPaused(true);
  };

  const unpause = async () => {
    // await sound.playAsync();
    setPaused(false);
  };

  const stop = async () => {
    // await sound.stopAsync();
    setPlaying(false);
    setPaused(false);
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  });

  return (
    <View style={[styles.wrapper, style]} {...props}>
      <Text>Tour Audio: </Text>
      <View style={styles.controls}>
        {!playing && (
          <Pressable onPress={play} style={styles.control}>
            <Icon name="play" />
          </Pressable>
        )}
        {loading && <LoadingIndicator />}
        {playing && !paused && (
          <Pressable onPress={pause} style={styles.control}>
            <Icon name="pause" />
          </Pressable>
        )}
        {playing && paused && (
          <Pressable onPress={unpause} style={styles.control}>
            <Icon name="play" />
          </Pressable>
        )}
        {playing && (
          <Pressable onPress={stop} style={styles.control}>
            <Icon name="stop" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  control: {
    marginLeft: 5,
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderWidth: 1,
  },
});

export default AudioPlayer;
