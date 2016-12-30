import React, { PropTypes } from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';
import Spinner from './Spinner';
import CenterView from './CenterView';

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

const BusyModal = ({message, isOpen, spinnerColor}) => {
  return (
    <Modal visible={isOpen}
      onRequestClose={() => false}
      transparent={true}
      animationType='fade'>
      <CenterView fillParent={true} method='vertical' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20 }}>
        <View style={styles.innerContainer}>
          <CenterView method='horizontal' fillParent={false}>
          {message ? <Text style={{paddingTop:20}}>{message}</Text> : null} 
          <Spinner color={spinnerColor} />
          </CenterView>
        </View>
      </CenterView>
    </Modal>
  );
};

BusyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  spinnerColor: PropTypes.string
};

export default BusyModal;
