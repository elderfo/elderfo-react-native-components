import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import Spinner from './Spinner';

const SpinnerCard = () => {
  return (
    <Card center={true}>
      <Spinner />
    </Card>
  );
}

export default SpinnerCard;
