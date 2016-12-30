import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo, } from '@kadira/react-native-storybook';

import { Container, Spinner, CenterView } from '../';

storiesOf('Spinner', module)
    .addDecorator(story => (
        <Container>
            <CenterView method='both' fillParent={true}>
                {story()}
            </CenterView>
        </Container>
    ))
    .add('with default config', () => (
        <Spinner />
    ))
    .add('with small size', () => (
        <Spinner size='small' />
    ))
    .add('with large size', () => (
        <Spinner size='large' />
    ))
    .add('with defined color', () => (
        <Spinner color='red' />
    ))