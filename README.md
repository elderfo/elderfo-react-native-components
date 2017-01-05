# React Native Common Components
This is a set of common components I use for creating react native applications. They were externalized from a project I was working on so I can rapidly develop new react native apps. 

More details to be added soon.

## Components

- BusyModal - A modal overlay with a spinner
- Card - Material like card
- CenterView - Centered view, it is vertically centered by default, has an potion
- Container - Scrollable container
- ErrorAlert - A simple text alert container
- H1 - Enlarged text input
- H2 - Text input
- Header - A material like header
- Platform - A wrapper around react native's platform that allows easier
- SearchHeader - A material like search header. It extends Header.
- SimpleTextCard - A card that text can be specified on
- Spinner - A spinner
- SpinnerCard - A card containing a centered spinner
- TextInput - An android like underlined text input

## Installation

Run:
```
$ yarn add elderfo-react-native-components -D
```
or
```
$ npm install elderfo-react-native-components --save-dev
```
After installation, linking of react-native-vector-icons:
```
$ react-native link react-native-vector-icons
```
See [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation) for more information.

## Storybook
Probably the best way to view the components is to run the storybook (note: not all components have stories at this time).

```
$ yarn run storybook
$ react-native run-ios
```

## Tests
This project uses storyshot for testing. To execute:
```
$ yarn run test
```
