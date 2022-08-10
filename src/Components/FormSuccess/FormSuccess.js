import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import React from 'react';

import {Overlay} from '@rneui/themed';

const FormSuccess = props => {
  return props.successMessage ? (
    <Overlay
      overlayStyle={styles.Overlay}
      isVisible={true}
      onBackdropPress={() => props.closeSuccess('')}>
      <Image
        style={styles.errorIcon}
        source={require('../../assets/success.png')}
      />
      <Text style={styles.successMessage}> {props.successMessage}</Text>
    </Overlay>
  ) : (
    <Overlay overlayStyle={styles.Overlay} isVisible={true}>
      <ActivityIndicator size={'large'} color={'#2FBBF0'} />
    </Overlay>
  );
};

export default FormSuccess;

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
  successMessage: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});
