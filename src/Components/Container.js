import React, { PropTypes } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Platform from './Platform';
import computeStyle from '../Util/computeStyle';

const headerTypes = [
  Header
];

const getHeader = (children) => {
  if (Array.isArray(children)) {
    return children.find(item => item && headerTypes.includes(item.type));
  } else if (children && headerTypes.includes(children.type)) {
    return children;
  }
};

const hasHeader = children => {
  return getHeader(children);
}

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

const generateStyleSheet = ({style, contentStyle, children}) => {

  let defaultStyle = {
    container: {
      flex: 1,
      paddingTop: hasHeader(children) ? 0 : Platform.ios ? 20 : 0
    },
    content: {
      padding: 10,
      flex: 1
    }
  };

  const computedStyle = computeStyle(defaultStyle, {
    container: style,
    content: contentStyle
  });

  return StyleSheet.create(computedStyle);
}

const Container = (props) => {

  const styleSheet = generateStyleSheet(props);
  return (
    <View style={styleSheet.container}>
      {getHeader(props.children)}
      <ScrollView>
        <View style={styleSheet.content}>
          {getContent(props.children)}
        </View>
      </ScrollView>
    </View>
  );
};

Container.propTypes = {
  style: PropTypes.object,
  contentStyle: PropTypes.object,
}

export default Container;
