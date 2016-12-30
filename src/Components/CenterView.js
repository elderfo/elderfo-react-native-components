import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { computeStyle } from '../Util';

const methods = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  both: 'both'
}

const isVerticalCenter = method => { 
  return method === methods.vertical || method === methods.both;
}

const isHorizontalCenter = method => { 
  return method === methods.horizontal || method === methods.both;
}


const CenterView = ({children, style = {}, method = methods.vertical, fillParent = false}) => {

  const absoluteStyles = {
    flex: fillParent ? 1 : undefined,
    justifyContent: isVerticalCenter(method) ? 'center' : undefined,
    alignItems: isHorizontalCenter(method) ? 'center' : undefined,
  };

  const styles = StyleSheet.create({
    main: computeStyle(style, absoluteStyles)
  });

  return (
    <View style={styles.main}>
      {children}
    </View>
  );
};

CenterView.propmethods = {
  method: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
  fillParent: PropTypes.bool,
  style: PropTypes.object
}

export default CenterView;
