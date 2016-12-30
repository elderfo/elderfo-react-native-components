import React, { PropTypes } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import computeStyle from '../Util/computeStyle';

const Spinner = ({style = {}, size = 'large', color}) => {

  const defaultStyle = {
    spinner: {
      height: 80,
      width: 80,
      margin: 5
    }
  };

  const styles = StyleSheet.create(computeStyle(defaultStyle, style));

  return (
    <ActivityIndicator
      style={styles.spinner}
      color={color}
      size={size} />
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  style: PropTypes.object
}

export default Spinner;
