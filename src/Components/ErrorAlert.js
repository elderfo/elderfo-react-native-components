import React, { PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';

const ErrorAlert = ({text}) => {
  if (text) {
    return <Text style={styles.errorText}>{text}</Text>
  }
  return (<Text></Text>);
};

ErrorAlert.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#8E2E22',
    borderColor: '#8E2E22',
    backgroundColor: '#DA8176',
    borderRadius: 0,
    borderWidth: 1
  },
});

export default ErrorAlert;
