import React from 'react';
import { Text, StyleSheet } from 'react-native';

const H1 = ({children}) => {
  return (
    <Text style={styles.h1}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize:20
  }
});

export default H1;
