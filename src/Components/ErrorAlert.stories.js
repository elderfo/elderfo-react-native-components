import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf, action, linkTo, } from '@kadira/react-native-storybook';

import { ErrorAlert, CenterView } from '../';

storiesOf('ErrorAlert', module)
    .addDecorator((story)=> (
        <CenterView fillParent={true} method='vertical' style={{padding:10}}>{story()}</CenterView>
    ))
    .add('with text (required)', () => (
        <ErrorAlert text={'I am an error!'} />
    ));
    