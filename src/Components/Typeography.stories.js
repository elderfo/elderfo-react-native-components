import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import { H1, H2, CenterView, Container } from '../';

storiesOf('Typeography', module)
  .addDecorator(getStory => (
    <Container>
      <CenterView method='vertical' fillParent={true}>{getStory()}</CenterView>
    </Container>
  ))
  .add('with H1', () => (
    <H1>I am legend</H1>
  ))
  .add('with H2', () => (
    <H2>I am legend</H2>
  ));
