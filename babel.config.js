module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '~assets': './assets',
          '~components': './src/components/',
          '~configs': './src/configs/',
          '~elements': './src/elements/',
          '~hooks': './src/hooks/',
          '~libraries': './src/libraries/',
          '~navigations': './src/navigations/',
          '~stores': './src/stores/',
          '~screens': './src/screens/',
          '~assets': './assets/',
        },
      },
    ],
  ],
};
