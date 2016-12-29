import React, { PropTypes } from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';
import Spinner from './Spinner';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

const BusyModal = ({message, isOpen, spinnerColor}) => {
  return (
    <Modal visible={isOpen}
      style={styles.modal}
      onRequestClose={() => false}
      transparent={true}
      animationType='fade'>
      <View style={styles.container} >
        <View style={styles.innerContainer}>
          <Text>{message}</Text>
          <Spinner color={spinnerColor} />
        </View>
      </View>
    </Modal>
  );
};

BusyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  spinnerColor: PropTypes.string
};

export default BusyModal;
