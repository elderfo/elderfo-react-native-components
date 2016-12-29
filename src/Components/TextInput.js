import React, { PropTypes } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const TextInputRT = ({icon, placeholder, onChangeText, value, secureTextEntry = false}) => {
  return (
    <View style={styles.inputGroup}>
      <TextInput
        style={styles.inputNb}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid='rgba(0,0,0,0)' />
    </View>
  );
};

TextInputRT.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool
};

const styles = StyleSheet.create({
  inputNb: {
    height: (Platform.OS === 'ios') ? 30 : 40 ,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 15,
    lineHeight: 24,
    borderWidth: 0
  },
  inputGroup: {
    backgroundColor: 'transparent',
    position: 'relative',
    borderColor: '#D9D5DC',
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 5,
    marginBottom: 5
  }
});

export default TextInputRT;
