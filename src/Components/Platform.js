import { Platform } from 'react-native';

const platforms = {
  ios: Platform.OS === 'ios',
  android: Platform.OS !== 'ios'
};

export default platforms;
