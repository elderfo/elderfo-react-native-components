import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text } from 'react-native';
import Card from './Card';

const SimpleTextCard = ({text}) => {
  return (
    <Card center={true}>
      <Text>{text}</Text>
    </Card>
  );
};

SimpleTextCard.propTypes = {
  text: PropTypes.string.isRequired
};

export default SimpleTextCard;
