import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo, } from '@kadira/react-native-storybook';

import { CenterView, Container } from '../';

storiesOf('CenterView', module)
  .addDecorator(story => (
    <Container>
      {story()}
    </Container>
  ))
  .add('centers vertically (fillParent)', () => (
    <CenterView method='vertical' fillParent={true}>
      <Text>Centered vertically</Text>
    </CenterView>
  ))
  .add('centers horizontally (fillParent)', () => (
    <CenterView method='horizontal' fillParent={true}>
      <Text>Centered horizontally</Text>
    </CenterView>
  ))
  .add('centers vertically and horizontally (fillParent)', () => (
    <CenterView method='both' fillParent={true}>
      <Text>Centered vertically and horizontally</Text>
    </CenterView>
  ))
  .add('disabled fillParent, vertical align (no change)', () => (
    <CenterView method='vertical' fillParent={false}>
      <Text>Centered vertically</Text>
    </CenterView>
  ))
  .add('disabled fillParent, horizontal align', () => (
    <CenterView method='horizontal' fillParent={false}>
      <Text>Centered horizontally</Text>
    </CenterView>
  ))
  .add('disabled fillParent, vertical and horizontal align (take horizontal)', () => (
    <CenterView method='both' fillParent={false}>
      <Text>Centered vertically and horizontally</Text>
    </CenterView>
  ))
  .add('with styles (non-fillParent)', () => (
    <CenterView method='both' style={{ backgroundColor: 'red' }} fillParent={false}>
      <Text>Centered vertically and horizontally</Text>
    </CenterView>
  ))
  .add('with styles (fillParent)', () => (
    <CenterView method='both' style={{ backgroundColor: 'red' }} fillParent={true}>
      <Text>Centered vertically and horizontally</Text>
    </CenterView>
  ))
  ;
