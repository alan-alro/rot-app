import React from 'react';
import {Text as RnText} from 'react-native';

const Text = ({children}, props) => {
  return <RnText {...props}>{children}</RnText>;
};

export default Text;
