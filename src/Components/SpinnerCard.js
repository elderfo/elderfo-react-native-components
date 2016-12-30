import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Spinner from './Spinner';
import CenterView from './CenterView';

const SpinnerCard = () => {
  return (
    <Card>
      <CenterView method='both' fillParent={false}>
        <Spinner />
      </CenterView>
    </Card>
  );
}

export default SpinnerCard;
