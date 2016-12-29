import React from 'react';
import { View } from 'react-native';

export default function CenterView(props) {

  const styles = {
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: props.horizontalCenter ? 'center' : undefined,
      padding: props.padding ? props.padding : 0,
      backgroundColor: '#F5FCFF',
    },
  };

  return (
    <View style={styles.main}>
      {props.children}
    </View>
  );
}

