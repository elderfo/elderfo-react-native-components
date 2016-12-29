import React, { PropTypes } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';

const defaultStyles = {
  card: {
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    flexWrap: 'wrap',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 2
  },
}

const Card = ({children, style = {}, center = false, includePadding = true, onPress}) => {
  const centerCardStyle = center ? { alignItems: 'center' } : {};

  const defaultStyle = Object.assign({}, defaultStyles.card, centerCardStyle, style);

  if (!includePadding) {
    delete defaultStyle.padding;
  }

  const styles = StyleSheet.create({
    card: defaultStyle,
    innerCard: center ? { alignItems: 'center' } : {}
  });

  const _onPress = () => {
    if (onPress) {
      onPress();
    }
  };

  const card = (
    <View style={styles.card}>
      <View style={styles.innerCard}>
        {children}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableHighlight onPress={_onPress} underlayColor={'transparent'}>
        {card}
      </TouchableHighlight>
    );
  } else {
    return card;
  }

}

Card.propTypes = {
  style: PropTypes.object,
  center: PropTypes.bool,
  includePadding: PropTypes.bool,
  onPress: PropTypes.func
}

export default Card;
