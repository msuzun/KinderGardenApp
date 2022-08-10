import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Overlay} from '@rneui/base';

const FormError = props => {
  return (
    <Overlay
      overlayStyle={styles.Overlay}
      isVisible={true}
      onBackdropPress={() => props.hideErrOverlay(false)}>
      <Image
        style={styles.errorIcon}
        source={require('../../assets/error.png')}
      />
      <Text style={styles.errorMessage}>{props.err}</Text>
      <TouchableOpacity
        style={styles.ButtonAlert}
        onPress={() => props.hideErrOverlay(false)}>
        <Text style={styles.ButtonAlertText}>Okay</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

export default FormError;

const styles = StyleSheet.create({
  Overlay: {
    width: '80%',
    height: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorIcon: {
    width: 72,
    height: 72,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  ButtonAlert: {
    width: 200,
    height: 51,
    backgroundColor: '#000',
    borderRadius: 5,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonAlertText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
