import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import { Header } from '../';

storiesOf('Header', module)
  .add('with platform default', () => (
    <Header title="Title"
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add'
      />
  ))
  .add('with platform default search', () => (
    <Header title="Title"
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'
      isSearch={true}
      />
  ))
  .add('with title only', () => (
    <Header title='Title' />
  ))
  .add('with a backgroundColor/foregroundColor', () => (
    <Header title='Title'
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add'
      backgroundColor='red'
      foregroundColor='silver' />
  ))
  .add('with left icon', () => (
    <Header title='Title'
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu' />
  ))
  .add('with right icon', () => (
    <Header title='Title'
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add' />
  ))
  .add('with left/right icons', () => (
    <Header title='Title'
      onLeftButtonClick={action('onLeftButtonClick')}
      leftButtonIcon='md-menu'
      onRightButtonClick={action('onRightButtonClick')}
      rightButtonIcon='md-add' />
  ))
  .add('with search mode', () => (
    <Header title='Title'
      isSearch={true}
      onSearch={action('SearchChanged')} />
  ))
  .add('with fixed search mode', () => (
    <Header title='Title'
      isSearch={true}
      isFixedSearch={true}
      onLeftButtonClick={action('BackButtonClick')}
      onSearch={action('SearchChanged')} />
  ))
  .add('with custom search placeholder', () => (
    <Header title='Title'
      searchPlaceholder='Custom placeholder'
      isSearch={true}
      onSearch={action('SearchChanged')} />
  ))
  .add('with search right button', () => (
    <Header title='Title'
      isSearch={true}
      isFixedSearch={true}
      onSearch={action('SearchChanged')}
      onLeftButtonClick={action('BackButtonClick')}
      searchRightIcon={'md-barcode'}
      onSearchRightClick={action('Search Right Click')}
      />
  ))
  .add('with no style Text', ()=>(
    <Header>
      <Text>Title</Text>
    </Header>
  ));
