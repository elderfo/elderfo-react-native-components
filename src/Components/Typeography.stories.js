import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import { H1, H2, CenterView } from './';

storiesOf('Typeography', module)
  .addDecorator(getStory => (
    <CenterView padding={10}>{getStory()}</CenterView>
  ))
  .add('with H1', () => (
    <H1>I am legend</H1>
  ))
  .add('with H2', () => (
    <H2>I am legend</H2>
  ));
