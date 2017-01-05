import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import { Header } from '../';

storiesOf('Header', module)
  .add('with platform default', () => (
    <Header
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add'>
      <Text>Title</Text>
    </Header>
  ))
  .add('with title only', () => (
    <Header>
      <Text>Title</Text>
    </Header>
  ))
  .add('with a backgroundColor/foregroundColor', () => (
    <Header
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add'
      backgroundColor='red'
      foregroundColor='silver'>
      <Text>Title</Text>
    </Header>
  ))
  .add('with left icon', () => (
    <Header
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'>
      <Text>Title</Text>
    </Header>
  ))
  .add('with right icon', () => (
    <Header
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add'>
      <Text>Title</Text>
    </Header>
  ))
  .add('with left/right icons', () => (
    <Header
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add'>
      <Text>Title</Text>
    </Header>
  ));
