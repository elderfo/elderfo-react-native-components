import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Spinner from './Spinner';
import CenterView from './CenterView';

const SpinnerCard = () => {
  return (
    <Card>
      <CenterView horizontalCenter={true}>
        <Spinner />
      </CenterView>
    </Card>
  );
}

export default SpinnerCard;
