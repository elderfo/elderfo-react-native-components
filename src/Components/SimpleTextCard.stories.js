import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo, } from '@kadira/react-native-storybook';

import { Container, SimpleTextCard } from '../';

storiesOf('SimpleTextCard', module)
    .addDecorator(story => (
        <Container>
            {story()}
        </Container>
    ))
    .add('with text (required)', () => (
        <SimpleTextCard text={'I am simple and texty'} />
    ))