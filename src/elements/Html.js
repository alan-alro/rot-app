import React from 'react';
import RenderHtml from 'react-native-render-html';
import themes from '~configs/themes';

const Html = ({evaluator, ...props}) => {
  if (evaluator && evaluator.length == 0) {
    return null;
  }

  return (
    <RenderHtml
      {...props}
      contentWidth={500}
      systemFonts={[themes.baseFontFamily]}
      baseStyle={{
        fontFamily: themes.baseFontFamily,
        fontSize: 16,
      }}
    />
  );
};

export default Html;
