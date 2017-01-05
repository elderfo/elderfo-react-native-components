import React, { PropTypes } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import SearchHeader from './SearchHeader';
import Platform from './Platform';
import { computeStyle } from '../Util';

const headerTypes = [
  Header,
  SearchHeader
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

const renderContent = (children, styleSheet) => {
  if (!children) {
    return;
  }

  if (Array.isArray(children)) {
    return (
      <View style={styleSheet.content}>
        {children.filter(item => item && !headerTypes.includes(item.type))}
      </View>
    );
  } else if (children && !headerTypes.includes(children.type)) {
    return (
      <View style={styleSheet.content}>
        {children}
      </View>
    );
  }
}

const generateStyleSheet = ({style, contentStyle, children}) => {

  let defaultStyle = {
    container: {
      flex: 1,
      paddingTop: hasHeader(children) ? 0 : Platform.ios ? 20 : 0
    },
    content: {
      flex: 1,
      padding: 10,
    },
    scroll: {
      flex: 1,
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

  const content = props.scroll
    ? (
      <ScrollView style={styleSheet.scroll}>
        {renderContent(props.children, styleSheet)}
      </ScrollView>
    )
    : renderContent(props.children, styleSheet);

  return (
    <View style={styleSheet.container}>
      {getHeader(props.children)}
      {content}
    </View>
  );
};

Container.propTypes = {
  style: PropTypes.object,
  contentStyle: PropTypes.object,
  scroll: PropTypes.bool,
}

export default Container;
