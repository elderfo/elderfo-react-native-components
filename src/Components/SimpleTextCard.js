import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from './Card';
import CenterView from './CenterView';

const SimpleTextCard = ({text}) => {
  return (
    <Card>
      <CenterView method='both' fillParent={false}>
        <Text>{text}</Text>
      </CenterView>
    </Card>
  );
};

SimpleTextCard.propTypes = {
  text: PropTypes.string.isRequired
};

export default SimpleTextCard;
