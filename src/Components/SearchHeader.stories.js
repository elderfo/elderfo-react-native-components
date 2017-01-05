import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo, } from '@kadira/react-native-storybook';

import { Container, SearchHeader } from '../';

storiesOf('SearchHeader', module)
    .addDecorator(story => (
        <Container>
            {story()}
        </Container>
    ))
    .add('with left button', () => (
        <SearchHeader
            onLeftButtonClick={action('onLeftButtonClick')}
            leftButtonIcon='md-arrow-back'
            onSearch={action('onSearch')} />
    ))
    .add('with right button', () => (
        <SearchHeader
            onRightButtonClick={action('onRightButtonClick')}
            rightButtonIcon='md-qr-scanner'
            onSearch={action('onSearch')} />
    ))
    .add('with both buttons', () => (
        <SearchHeader
            onLeftButtonClick={action('onLeftButtonClick')}
            leftButtonIcon='md-arrow-back'
            onRightButtonClick={action('onRightButtonClick')}
            rightButtonIcon='md-qr-scanner'
            onSearch={action('onSearch')} />
    ))
    .add('with custom placeholder', () => (
        <SearchHeader
            placeholder='Custom Placeholder'
            onLeftButtonClick={action('onLeftButtonClick')}
            leftButtonIcon='md-arrow-back'
            onRightButtonClick={action('onRightButtonClick')}
            rightButtonIcon='md-qr-scanner'
            onSearch={action('onSearch')} />
    ))
    .add('with a backgroundColor/foregroundColor', () => (
        <SearchHeader
            onLeftButtonClick={action('onLeftButtonClick')}
            leftButtonIcon='md-menu'
            onRightButtonClick={action('onRightButtonClick')}
            rightButtonIcon='md-qr-scanner'
            backgroundColor='red'
            foregroundColor='silver' />
    ))