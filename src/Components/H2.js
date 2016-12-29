import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H2 = ({children}) => {
  return (
    <Text style={styles.h2}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize:18
  }
});

export default H2;
