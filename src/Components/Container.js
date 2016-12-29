import React, { PropTypes } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';

const headerTypes = [
  Header
];


const defaultStyles =  {
  container: { 
    flex:1
  }
};

const getHeader = (children) => {
  if (Array.isArray(children)) {
    return children.find(item => item && headerTypes.includes(item.type));
  } else if (children && headerTypes.includes(children.type)) {
    return children;
  }
};

const getContent = (children) => {
  if (!children) {
    return;
  }

  if (Array.isArray(children)) {
    return children.filter(item => item && !headerTypes.includes(item.type));
  } else if (children && !headerTypes.includes(children.type)) {
    return children;
  }
}

const computeStyle = ({style, centerVertically}) => {

  let defaultStyle = defaultStyles.container;

  defaultStyle = centerVertically
    ? Object.assign({}, defaultStyle, { justifyContent: 'center' })
    : defaultStyle

  if (typeof (style) === 'object') {
    defaultStyle = style
      ? Object.assign({}, defaultStyle, style)
      : defaultStyle;
  }

  return StyleSheet.create({
    container: defaultStyle,
    cardContainer: {
      padding: 10,
      flex: centerVertically ? undefined : 1
    }
  });
}

const Container = (props) => {

  const styles = computeStyle(props);
  return (
    <View style={styles.container}>
      {getHeader(props.children)}
      <ScrollView>
        <View style={styles.cardContainer}>{getContent(props.children)}</View>
      </ScrollView>
    </View>
  );
};

Container.propTypes = {
  dark: PropTypes.bool,
  centerVertically: PropTypes.bool
}

export default Container;
