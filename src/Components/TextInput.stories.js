import React from 'react';
import 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import { CenterView, TextInput, Container } from '../';

storiesOf('TextInput', module)
    .addDecorator(story => (
        <Container>
            {story()}
        </Container>
    ))
    .add('default', () => {
        return (<TextInput onChangeText={action('ChangeText')} value={'Sample Input'} />);
    })
    .add('with placeholder', () => {
        return (<TextInput placeholder='Placeholder' onChangeText={action('ChangeText')} value={''} />);
    })
    .add('with secure input', () => {
        return (<TextInput secureTextEntry={true} onChangeText={action('ChangeText')} value={'I am secure'} />);
    });