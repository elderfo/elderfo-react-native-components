import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import {Card, CenterView} from '../';

storiesOf('Card', module)
  .addDecorator(getStory => (
    <CenterView padding={10}>{getStory()}</CenterView>
  ))
  .add('with text', () => (
    <Card>
      <Text>With Text</Text>
    </Card>
  ))
  .add('with centered content', () => (
    <Card center={true}>
      <Text>Centered</Text>
    </Card>
  ))
  .add('with padding', ()=> (
    <Card includePadding={true}>
      <Text>With Padding</Text>
    </Card>
  ))
  .add('without padding', ()=> (
    <Card includePadding={false}>
      <Text>Without Padding</Text>
    </Card>
  ))
  .add('with click handler', () =>  (
    <Card onPress={action('Clicked')}>
      <Text>Click me</Text>
    </Card>
  ));
