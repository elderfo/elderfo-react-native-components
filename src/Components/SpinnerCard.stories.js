import React from 'react';
import 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import { CenterView, SpinnerCard, Container } from '../';

storiesOf('SpinnerCard', module)
    .addDecorator(story => (
        <Container>
            <CenterView method='vertical'>{story()}</CenterView>
        </Container>
    ))
    .add('default', () => (
        <SpinnerCard />
    ));