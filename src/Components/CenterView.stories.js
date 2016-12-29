import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo,  } from '@kadira/react-native-storybook';

import { CenterView } from '../';

storiesOf('CenterView', module)
  .add('centers vertically', () => (
      <CenterView>
        <Text>Centered vertically</Text>
      </CenterView>
  ))
   .add('centers vertically and horizontally', () => (
      <CenterView horizontalCenter={true}>
        <Text>Centered vertically and horizontally</Text>
      </CenterView>
  ))
;
