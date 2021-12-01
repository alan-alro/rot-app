import React from 'react';
import {View, Image} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import EStyleSheet from 'react-native-extended-stylesheet';
import DevPanelPressable from '~components/DevPanelPressable';
import TextLogo from '~assets/images/logo-with-text.png';

const LogoWithText = ({imageProps, style, imageStyle}, props) => {
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <DevPanelPressable>
        <AutoHeightImage
          style={[styles.image, imageStyle]}
          width={240}
          {...imageProps}
          source={TextLogo}
          resizeMode="contain"
        />
      </DevPanelPressable>
    </View>
  );
};

const styles = EStyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    // width: 240,
  },
});

export default LogoWithText;
