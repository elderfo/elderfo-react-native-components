import React, { PropTypes } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';


const Spinner = ({style = {}, size = 'large', color = '#124081'}) => {
  const styles = StyleSheet.create({
    spinner: Object.assign({}, {
      height: 80,
      width: 80,
      margin: 5
    }, style)
  });

  return (
    <ActivityIndicator
      style={styles.spinner}
      color={color}
      size={size} />
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}



export default Spinner;
